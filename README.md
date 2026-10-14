# 🍃 Island Friends — ACNH Villager Tracker

A cozy little friend tracker for **Animal Crossing: New Horizons**. No installs, no server, no accounts — just open it in your browser.

## 🌐 Live site

**https://beef-erikson.github.io/acnh-friend-tracker/**

On iPhone: open that link in Safari → **Share → Add to Home Screen** — it installs as a full-screen app with its own leaf icon and works offline once loaded.

## How to use

Double-click `index.html` (any modern browser — Chrome, Safari, Edge, Firefox).

## 📱 Use it on your iPhone

**Done — it's hosted!** Open **https://beef-erikson.github.io/acnh-friend-tracker/** in iPhone Safari, then tap **Share → Add to Home Screen** for an app icon. It opens full-screen and keeps working offline (images cache automatically as you browse).

**Moving progress between devices:** use **⬇️ Export my data** on one device (save the backup file to iCloud Drive or Files), then **⬆️ Import data** on the other. Your progress is stored per-device in the browser. iPhone tip: iOS can clear website data you haven't touched in a while, so export a backup every so often.

**Updating the app:** this repo auto-deploys — push (or upload) changes to `main` on GitHub and the site updates in a minute or two.

**At home only, without GitHub:** double-click **`Start iPhone Server.command`** (keep the window open) and visit the printed `http://192.168.x.x:8931` address from iPhone Safari on the same Wi-Fi.


- **🏝️ My Island** — track the villagers currently living on your island (up to 10, just like the game). Click a resident's card for their full profile, or "👋 Move out" when they leave. Residents you move out stay in your collection.
- **📖 All Villagers** — all 413 villagers with a green ✓ badge on the ones you've acquired (unacquired villagers appear faded). Search by name, catchphrase, hobby… filter by species, personality, or collection status, and sort five ways.
- **🪧 Villager cards** — every villager's species, personality, gender, hobby, birthday (+ zodiac sign and a countdown!), catchphrase, favorite song, favorite colors & styles, signature outfit, favorite saying, their house interior, and when they were added to the game.
- Click your island name in the header to rename it. A 🎂 banner appears when a resident's birthday is coming up.

Everything is saved automatically in your browser (localStorage). Use **⬇️ Export my data / ⬆️ Import data** in the footer to back up or move your progress.

> Offline note: villager icons & photos are stored locally, so they always work. The "inside their home" house renders load from an online mirror (acnhcdn.com) and appear only when you're connected to the internet.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole app (HTML + CSS + JS) |
| `data.js` | All 413 villagers' data |
| `img/icon/`, `img/photo/` | 826 locally-stored villager images |

Data & images come from the community New Horizons spreadsheet dataset (via the `animal-crossing` npm package). Unofficial fan tool — not affiliated with Nintendo.
