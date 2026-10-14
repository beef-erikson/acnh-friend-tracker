# 🍃 Island Friends — ACNH Villager Tracker

A cozy little friend tracker for **Animal Crossing: New Horizons**. No installs, no server, no accounts — just open it in your browser.

## How to use

Double-click `index.html` (any modern browser — Chrome, Safari, Edge, Firefox).

## 📱 Use it on your iPhone

**Option A — Anywhere (best): host it online for free with GitHub Pages**

1. Create a GitHub repository and upload this whole folder (34 MB, all 413 photos included), then enable **Settings → Pages → Deploy from branch (main)**.
2. Open `https://<your-name>.github.io/<repo>/` in iPhone Safari.
3. Tap **Share → Add to Home Screen** — you get an app icon and it opens full-screen like a real app, with offline support (images cache automatically after first visit).

**Option B — At home only: serve it from your Mac**

1. On your Mac, double-click **`Start iPhone Server.command`** (keep the window open).
2. On your iPhone, connected to the same Wi-Fi, open Safari and go to the `http://192.168.x.x:8931` address it prints.
3. Share → Add to Home Screen works here too (offline caching isn't available on plain `http://`).

Either way, use **⬇️ Export my data** / **⬆️ Import data** to move your progress between your computer and phone (save the backup file to Files or iCloud Drive, then import it on the other device). iPhone tip: iOS can clear website data you haven't touched in a while, so export a backup every so often.


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
