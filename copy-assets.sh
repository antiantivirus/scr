#!/usr/bin/env bash
# Run this once from the repo root to copy all static assets into the Astro project.
# Usage: bash astro/copy-assets.sh

set -e
REPO="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$REPO/astro/public"

echo "Copying fonts..."
cp "$REPO/src/fonts/"*.woff  "$DEST/fonts/"
cp "$REPO/src/fonts/"*.woff2 "$DEST/fonts/"

echo "Copying token images..."
cp "$REPO/assets/images/"*.png "$DEST/images/"

echo "Copying content images..."
cp "$REPO/content/home/rose.png"                 "$DEST/images/"
cp "$REPO/content/home/antenna.jpg"              "$DEST/images/"
cp "$REPO/content/home/dragon-blue-with-moon.png"   "$DEST/images/"
cp "$REPO/content/home/dragon-red-with-moon.png"    "$DEST/images/"
cp "$REPO/content/home/dragon-yellow-with-moon.png" "$DEST/images/"

echo "Copying SoundCloud logo..."
cp "$REPO/assets/soundcloud-logo.png" "$DEST/"

echo "Done. Assets copied to astro/public/"
