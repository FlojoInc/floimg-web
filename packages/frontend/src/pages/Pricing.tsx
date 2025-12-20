import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "For trying out floimg",
    features: [
      "50 images/month",
      "100MB storage",
      "1 project",
      "Basic generators",
      "Community support",
    ],
    cta: "Get Started",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$10",
    period: "/month",
    description: "For individual developers",
    features: [
      "500 images/month",
      "1GB storage",
      "10 projects",
      "All generators including AI",
      "Email support",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=starter",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For teams and professionals",
    features: [
      "2,000 images/month",
      "10GB storage",
      "Unlimited projects",
      "5 team seats",
      "Priority support",
      "API access",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=pro",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited images",
      "Unlimited storage",
      "Unlimited projects",
      "Unlimited seats",
      "SLA guarantee",
      "Dedicated support",
      "SSO/SAML",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Pricing</h1>
        <p className="mt-4 text-zinc-400">
          Start free, scale as you grow. Self-hosting is always free.
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-4">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-lg border p-8 ${
              tier.highlighted
                ? "border-violet-500 bg-violet-500/10"
                : "border-white/10 bg-zinc-900/50"
            }`}
          >
            <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-white">{tier.price}</span>
              {tier.period && <span className="text-zinc-400">{tier.period}</span>}
            </div>
            <p className="mt-2 text-sm text-zinc-400">{tier.description}</p>

            <ul className="mt-8 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-zinc-300">
                  <svg
                    className="h-4 w-4 text-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={tier.href}
              className={`mt-8 block rounded-lg px-4 py-2 text-center text-sm font-medium transition-colors ${
                tier.highlighted
                  ? "bg-violet-600 text-white hover:bg-violet-500"
                  : "border border-white/20 text-white hover:bg-white/5"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-zinc-400">
          Prefer to self-host?{" "}
          <Link to="/docs/self-hosting" className="text-violet-400 hover:text-violet-300">
            Run floimg Studio on your own infrastructure for free →
          </Link>
        </p>
      </div>
    </div>
  );
}
