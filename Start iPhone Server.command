#!/bin/bash
# Serves the Island Friends tracker on your Wi-Fi so iPhone Safari can use it.
cd "$(dirname "$0")"
IP=$(ipconfig getifaddr en0 || ipconfig getifaddr en1)
PORT=8931
echo "====================================================="
echo "  🍃 Island Friends is now serving over your Wi-Fi"
echo ""
echo "  On your iPhone (same Wi-Fi), open Safari and go to:"
echo ""
echo "        http://${IP}:${PORT}"
echo ""
echo "  Tip: Share button ➜ 'Add to Home Screen' for a"
echo "  home-screen icon. Keep this window open while using."
echo "====================================================="
echo ""
python3 -m http.server ${PORT}
