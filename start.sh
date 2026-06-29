#!/bin/bash
echo "Diamond Education - Starting local server..."
echo ""
echo "Open in browser: http://localhost:8765"
echo "Press Ctrl+C to stop."
echo ""
python3 -m http.server 8765
