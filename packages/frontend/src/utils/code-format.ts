/**
 * Code formatting utilities for floimg-web
 *
 * Converts between JS code examples and other formats (YAML, CLI).
 * Used by gallery templates and potentially plugin examples.
 *
 * Design note: This is intentionally separate from floimg Studio's
 * code generators, which work with nodes/edges (graph structure).
 * These utilities work with static metadata and code strings.
 */

export interface CodeFormats {
  js: string;
  yaml: string;
  cli: string;
}

export interface GenerateCodeOptions {
  name: string;
  generator: string;
  jsCode?: string;
}

/**
 * Generate code in all formats from JS code example
 */
export function generateCodeFormats(options: GenerateCodeOptions): CodeFormats {
  const { name, generator, jsCode = "" } = options;

  return {
    js: jsCode,
    yaml: jsToYaml(name, generator, jsCode),
    cli: jsToCli(name, generator, jsCode),
  };
}

/**
 * Convert JS code example to YAML workflow config
 */
function jsToYaml(name: string, generator: string, jsCode: string): string {
  // Handle pipeline-style code differently
  if (generator === "pipeline" || jsCode.includes(".pipeline(")) {
    return pipelineToYaml(name, jsCode);
  }

  // Extract params from floimg.generate() call
  const params = extractParams(jsCode);

  let yaml = `# ${name}\n`;
  yaml += `name: "${name}"\n`;
  yaml += `steps:\n`;
  yaml += `  - kind: generate\n`;
  yaml += `    generator: ${generator}\n`;

  if (params.length > 0) {
    yaml += `    params:\n`;
    for (const [key, value] of params) {
      yaml += `      ${key}: ${formatYamlValue(value)}\n`;
    }
  }

  yaml += `    out: result`;

  return yaml;
}

/**
 * Convert pipeline JS to YAML
 */
function pipelineToYaml(name: string, jsCode: string): string {
  let yaml = `# ${name}\n`;
  yaml += `name: "${name}"\n`;
  yaml += `steps:\n`;

  // Extract pipeline operations
  const ops = extractPipelineOps(jsCode);

  if (ops.length === 0) {
    // Fallback for unparseable pipelines
    yaml += `  # See JavaScript example for full pipeline\n`;
    yaml += `  - kind: transform\n`;
    yaml += `    op: resize\n`;
    yaml += `    params:\n`;
    yaml += `      width: 800\n`;
    yaml += `    out: result`;
    return yaml;
  }

  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    yaml += `  - kind: transform\n`;
    yaml += `    op: ${op.name}\n`;

    if (Object.keys(op.params).length > 0) {
      yaml += `    params:\n`;
      for (const [key, value] of Object.entries(op.params)) {
        yaml += `      ${key}: ${formatYamlValue(value)}\n`;
      }
    }

    yaml += `    out: ${op.save || `step-${i + 1}`}\n`;
  }

  return yaml.trimEnd();
}

/**
 * Convert JS code example to CLI command
 */
function jsToCli(name: string, generator: string, jsCode: string): string {
  // Pipelines are best run via YAML
  if (generator === "pipeline" || jsCode.includes(".pipeline(")) {
    return `# ${name}\n# Run pipelines via YAML config:\nfloimg run workflow.yaml`;
  }

  const params = extractParams(jsCode);

  let cli = `# ${name}\n`;
  cli += `floimg generate ${generator}`;

  for (const [key, value] of params) {
    const cliKey = camelToKebab(key);
    cli += ` \\\n  --${cliKey} ${formatCliValue(value)}`;
  }

  cli += ` \\\n  --output result.png`;

  return cli;
}

/**
 * Extract key-value params from JS code
 */
function extractParams(jsCode: string): Array<[string, unknown]> {
  const params: Array<[string, unknown]> = [];

  // Match params object in generate() call
  const paramsMatch = jsCode.match(/params:\s*\{([\s\S]*?)\}/);
  if (!paramsMatch) return params;

  const block = paramsMatch[1];

  // Match simple key-value pairs (strings, numbers)
  const pairRegex = /(\w+):\s*(?:'([^']*)'|"([^"]*)"|(\d+))/g;
  let match;

  while ((match = pairRegex.exec(block)) !== null) {
    const key = match[1];
    const value = match[2] ?? match[3] ?? (match[4] ? Number(match[4]) : null);
    if (value !== null) {
      params.push([key, value]);
    }
  }

  return params;
}

/**
 * Extract pipeline operations from JS code
 */
interface PipelineOp {
  name: string;
  params: Record<string, unknown>;
  save?: string;
}

function extractPipelineOps(jsCode: string): PipelineOp[] {
  const ops: PipelineOp[] = [];

  // Match: { op: 'resize', params: { width: 800 }, save: 'output.png' }
  const opRegex =
    /\{\s*op:\s*['"](\w+)['"](?:[\s\S]*?params:\s*\{([\s\S]*?)\})?(?:[\s\S]*?save:\s*['"]([^'"]+)['"])?\s*\}/g;

  let match;
  while ((match = opRegex.exec(jsCode)) !== null) {
    const op: PipelineOp = {
      name: match[1],
      params: {},
    };

    // Parse params if present
    if (match[2]) {
      const paramPairs = match[2].matchAll(/(\w+):\s*(?:['"]([^'"]*)['"']|(\d+))/g);
      for (const pair of paramPairs) {
        const key = pair[1];
        const value = pair[2] ?? (pair[3] ? Number(pair[3]) : null);
        if (value !== null) {
          op.params[key] = value;
        }
      }
    }

    if (match[3]) {
      op.save = match[3];
    }

    ops.push(op);
  }

  return ops;
}

/**
 * Format value for YAML output
 */
function formatYamlValue(value: unknown): string {
  if (typeof value === "string") {
    // Quote strings that contain special chars
    if (/[:{}[\],&*#?|\-<>=!%@`]/.test(value) || value.includes("\n")) {
      return `"${value.replace(/"/g, '\\"')}"`;
    }
    return `"${value}"`;
  }
  return String(value);
}

/**
 * Format value for CLI output
 */
function formatCliValue(value: unknown): string {
  if (typeof value === "string") {
    // Always quote strings for CLI safety
    return `"${value.replace(/"/g, '\\"')}"`;
  }
  return String(value);
}

/**
 * Convert camelCase to kebab-case
 */
function camelToKebab(str: string): string {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}
