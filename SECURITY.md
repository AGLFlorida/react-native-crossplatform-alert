# Security Policy

## Supported Versions

We release security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |

Older major versions are not supported. Please upgrade to a supported release.

## Reporting a Vulnerability

**Do not report security vulnerabilities in public GitHub issues.** Public disclosure could put users at risk.

### How to report

1. **Report privately** by contacting the maintainers through a private channel (e.g. the repository owner’s contact method, or open a **private security advisory** on GitHub: **Security** tab → **Advisories** → **Report a vulnerability**).
2. Include a clear description of the issue, steps to reproduce, and impact.
3. Allow a reasonable time for a fix before any public disclosure (we aim to respond within 14 days and will work with you on timing).

### What to expect

- We will acknowledge your report and keep you updated on progress.
- We will work on a fix and coordinate disclosure with you where possible.
- We will credit you in the advisory/release notes if you wish (please say so in your report).

### Out of scope

- Issues that require physical access to a user’s device or already-compromised credentials.
- Vulnerabilities in third-party dependencies: report them upstream and notify us so we can track and bump versions.

## Security practices

- **Secrets:** Do not commit `.env`, keystores, or other secrets. Use `.env.example` as a template only; see [README Environment](README.md#environment).
- **Dependencies:** We use `npm audit` and dependency updates; security-related dependency bumps are prioritized.
- **Supply chain:** Prefer `npm ci` for reproducible installs; review lockfile changes in PRs.

Thank you for helping keep NextRep and its users safe.
