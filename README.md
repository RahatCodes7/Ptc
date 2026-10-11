# Penta Core — $PTC Ecosystem Site

Static website for **Penta Core**, the $PTC token ecosystem:
*One Token. More Ways to Earn.* — levels, staking, bonus pools and ecosystem rewards.

Live product: presale landing page + App, Staking, Launchpad, AI Bots, AI Analyzer,
How-to-Buy, Wallet, Blog and Docs sections.

## ✨ What's inside

| Area | Path | Notes |
|---|---|---|
| Landing (presale) | `index.html` | Buy widget, tokenomics, tiers, roadmap, FAQ |
| App dashboard | `app/` | Wallet-connected dashboard |
| Staking | `staking/` | Staking plans, claims & withdrawals |
| Launchpad | `launchpad/` | Token sale / launchpad section |
| AI Bots | `ai-bots/` | AI trading bots overview |
| AI Analyzer | `ai-analyzer/` | Market analyzer overview |
| How to Buy | `how-to-buy/` | Step-by-step purchase guide |
| Wallet | `wallet/` | Wallet setup help |
| Blog | `blog/` | Articles & updates |
| Docs / Knowledge base | `docs/` | Guides: token utility, levels, bonuses, staking, security… |
| Legal | `terms/`, `privacy/`, `risks/` | Terms, privacy & risk disclosure |
| Whitepaper | `docs/pentacore-whitepaper_pdf.html` | In-browser whitepaper |

## 🚀 Quick start (run locally)

> ⚠️ **Don't just double-click `index.html`.**
> The site uses ES modules (`type="module"`), which browsers block over
> `file://` (CORS). Some features — e.g. the mobile hamburger menu JS —
> will silently break. Always serve over HTTP:

```bash
cd fundera.io
python -m http.server 8099
# open http://localhost:8099/index.html
```

Any static server works (`npx serve`, Nginx, GitHub Pages, Vercel, etc.).
Serve the **`fundera.io/` folder as the web root** so absolute paths like
`/land/...` and `/purchase/...` resolve correctly.

## 📁 Project structure

```
fundera.io/
├── index.html            # Landing page (nav, hero, buy widget, sections, footer)
├── assets/               # JS / CSS bundles (Vite build output — do not hand-edit)
│   ├── main-*.js         # Landing page entry (imports header-controls, buy widget…)
│   ├── header-controls-*.js  # Nav, mobile menu, language switcher, ticker
│   └── …
├── land/                 # Landing images (PTC logo, coin art, UI mockups)
├── purchase/             # Purchase capacity endpoint data
├── app/ staking/ launchpad/ ai-bots/ ai-analyzer/
│   how-to-buy/ wallet/ blog/ docs/ terms/ privacy/ risks/
└── favicon.png
```

## 🧭 Navigation behaviour

- Desktop nav uses in-page anchors on the landing page:
  `Main → #top`, `Tokenomics → #tokenomics`, `Roadmap → #roadmap`,
  `How to buy → how-to-buy/`.
- The mobile hamburger (`#mobToggle` → `#mobMenu`) is wired by
  `header-controls-*.js`. As a safety net, `index.html` also ships a tiny
  inline fallback toggle so the menu still opens even if the module bundle
  fails to load (e.g. opened via `file://` or a blocked CDN asset).
- Scroll-spy highlights the active nav item while scrolling the landing page.

## 🌐 i18n

18 locales (`en`, `ar`, `de`, `fr`, `es`, `it`, `ja`, `ko`, `nl`, `no`, `pt`,
`ru`, `tr`, `vi`, `zh`, `da`, `fi`, `th`) ship as `assets/<lang>-*.js` chunks
and load on demand. Language preference persists in `localStorage`
(`fundera_lang` / `i18nextLng`).

## 🔧 Maintenance notes

- **Edit `*.html` directly** for copy/link changes (nav, footer, socials).
  Canonical socials: X → `https://x.com/PentaCore_io`,
  Telegram → `https://t.me/pentacore_network`.
- **Don't hand-edit `assets/*.js`** — they're build output. Rebuild from the
  frontend source if behaviour must change; keep the inline menu fallback in
  `index.html` in sync.
- After changing nav anchors, check both desktop (`.navlinks`) and mobile
  (`.mob-links`) blocks, plus the footer link columns.
- Quick link health check: serve locally and confirm `200` for
  `/`, `/docs/`, `/how-to-buy/`, `/app/`, `/land/penta-core-logo.png`,
  `/assets/main-*.js`.

## 📦 Deploy

Any static host works. Publish the contents of `fundera.io/` at the domain
root (required for `/land/*` and `/purchase/*` absolute paths).

## ⚖️ Legal

See `terms/`, `privacy/` and `risks/` in this repo. Nothing here is financial
advice — cryptocurrency value can fluctuate and may be regulated in your
jurisdiction.
