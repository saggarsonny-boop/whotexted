# ENGINE_GRAMMAR — WhoTextedMe

<GrapplerHook>
engine: WhoTextedMe
version: 1.0.0
governance: QueenBee.MasterGrappler
safety: enabled
multilingual: pending
premium: false
</GrapplerHook>

## Engine Identity
- **Name:** WhoTextedMe
- **Domain:** whotextedme.hive.baby
- **Repo:** saggarsonny-boop/whotextedme
- **Status:** Live
- **Stack:** Next.js + TypeScript + AbstractAPI (free tier) + libphonenumber-js

## Purpose
Free reverse phone number lookup. Enter any phone number and get carrier, line type (mobile/landline/VoIP), and geographic location. Undercuts paid services (HPI, TrueCaller) using public data. No account needed. No data stored.

## Inputs
- Phone number (any format, any country — libphonenumber-js normalises)

## Outputs
- Carrier name
- Line type: mobile / landline / VoIP / unknown
- Country and region
- Number format (E.164, national, international)
- Confidence level

## Modes
- **Lookup:** Single number, immediate result
- **Fallback:** If AbstractAPI fails, libphonenumber-js provides local parsing (carrier/type unavailable, geography still works)

## Reasoning Steps
1. Normalise input using libphonenumber-js
2. Validate: is this a plausible number?
3. Call AbstractAPI phone validation endpoint
4. If AbstractAPI returns data: display carrier, line type, location
5. If AbstractAPI fails: display geographic data from libphonenumber-js, flag carrier as unavailable

## Safety Templates
- No use for stalking, harassment, or surveillance: "This service is for identifying unknown callers. Do not use to track or harass individuals."
- Results are data only — no inference about the person holding the number

## Multilingual Ribbon
- Status: pending
- Target: localise number format display, translate UI labels
- MLLR integration: post-QB deployment

## Premium Locks
- None currently. Future Pro: bulk lookup, export, history, spam score.

## Governance Inheritance
- Governed by: QueenBee.MasterGrappler (pending)
- Safety level: standard
- Output schema: lookup-response
- Tone: neutral

## API Model Strings
- No LLM. External API: AbstractAPI phone validation (free tier).
- Env var: ABSTRACTAPI_KEY

## Deployment Notes
- Vercel: auto-deploy on push to main
- Domain: whotextedme.hive.baby → Cloudflare CNAME → cname.vercel-dns.com
- Deployment Protection: OFF
