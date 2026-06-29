@echo off
echo Diamond Education - Starting local server...
echo.
echo Open in browser: http://localhost:8765
echo Press Ctrl+C to stop.
echo.
python -m http.server 8765
pause
