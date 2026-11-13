# Skull PvP website

An information-only homepage for the Skull PvP Minecraft server, built with
React and Vite.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`, or check the source with
`npm run lint`.

## Deploy on Vercel

Import this repository into Vercel and use the Vite defaults, or set:

- Build command: `npm run build`
- Output directory: `dist`

The production build includes the homepage, `/gallery.html`, and `/rules.html`.
No custom rewrites are required.

## Server details

Edit `src/data/serverInfo.js` to update the server details:

- `ip`: `SkullPvP.mc.gg`
- `discord`: the supplied invite is already configured.
- `store`: the supplied Tebex link is already configured.

Store buttons open the configured store URL. No shop, checkout, login, or
payment flow is included.

The homepage steps and rules preview, plus the separate screenshot gallery and
full rules page, are reusable components in `src/components/`. The gallery is
available at `/gallery.html` and the rules at `/rules.html`. Optimized
screenshots are in `public/gallery/`. Original uploads and server reference
documents under `assets/` are excluded from Git; only the emblem required by
the homepage is included.
