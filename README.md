# Trailhead — Tailwind lab starter

Trailhead is a trail-conditions board: twelve trails in two groups (day hikes
and overnights), a row of filter buttons with counts, and a card for each
trail. It has no state and does no fetching. The filter buttons are for
display only, and the one whose count is zero is really `disabled`.

Every style on the page is in `src/styles.css`: 213 lines of hand-written CSS,
behind class names such as `card` and `masthead`. In this lab you replace that
stylesheet with Tailwind CSS v4 and style the same page with utility classes.

## Run it

```
git clone https://github.com/joshbarcher/355-tailwind-lab
cd 355-tailwind-lab
npm install
npm run dev
```

Open the address Vite prints. Look at the finished board before changing
anything: that is the design you will rebuild.

## What is in it

| File | What it holds |
|---|---|
| `src/App.jsx` | the page: header, filter buttons, both groups of cards |
| `src/styles.css` | every style on the page |
| `src/data/trails.js` | the twelve trails |
| `vite.config.js` | the Vite config, before Tailwind is added |

## Reference

- [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Styling with utility classes](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for VS Code
