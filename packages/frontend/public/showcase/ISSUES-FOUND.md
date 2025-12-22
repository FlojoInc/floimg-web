# Issues Found During Showcase Generation

These issues were encountered while creating showcase assets. They should be fixed in the respective repos.

## Pipeline Issues

### 1. Pipeline runner doesn't load plugin generators

**Repo**: floimg
**Severity**: Medium
**Issue**: When running `npx @teamflojo/floimg run pipeline.yaml`, plugin generators like `qr` from `@teamflojo/floimg-qr` are not available. The error is:

```
Provider "qr" not found for type "generator"
```

**Expected**: Users should be able to specify plugins to load, or common plugins should be auto-discovered.

### 2. Convert operation `to` parameter not passed

**Repo**: floimg
**Severity**: Medium
**Issue**: In `client.ts` lines 463-467, the convert transform doesn't receive the `to` parameter from pipeline params:

```typescript
case "convert":
  image = await this.transform({
    input: image,
    op: step.op,
    // 'to' is not passed from step.params
  });
```

**Expected**: The `to` parameter should be passed through from `step.params`.

## Documentation/API Issues

### 3. QR generator uses `text` not `data`

**Repo**: floimg-qr
**Severity**: Low (documentation)
**Issue**: The parameter for content is `text`, but examples/intuition might suggest `data`.
**Note**: This is documented correctly, just noting for consistency checks.

### 4. QR generator color params use nested object

**Repo**: floimg-qr
**Severity**: Low (documentation)
**Issue**: Colors are passed as `color: { dark: '#xxx', light: '#xxx' }` not flat `dark`/`light` params.
**Note**: This is intentional (pass-through to qrcode lib), but pipeline YAML format might benefit from flat params.
