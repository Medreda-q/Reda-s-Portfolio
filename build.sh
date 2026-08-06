#!/bin/bash
set -e

HUGO_VERSION="0.164.0"

echo ">>> Installing Hugo Extended v${HUGO_VERSION}..."
curl -fsSL "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz" \
  | tar -xz -C /usr/local/bin hugo

echo ">>> Hugo version: $(hugo version)"

echo ">>> Building Hugo CV..."
hugo -s cv-project -d ../public/cv --gc --minify

echo ">>> Building Vite portfolio..."
npx vite build

echo ">>> Build complete!"
