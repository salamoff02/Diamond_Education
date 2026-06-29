# Diamond Education

Official website of **Diamond Education** — Education consultancy specialists for studying in Türkiye.

🌐 **5 Languages:** Türkmen · English · Русский · Türkçe · 中文

---

## 🚀 Run Locally

### Prerequisites
You only need **Python** (no other tools required).

---

### Windows

1. **Install Python** (if not installed)
   - Download from: https://www.python.org/downloads/
   - During install, check ✅ **"Add Python to PATH"**

2. **Clone the repo**
   ```
   git clone https://github.com/YOUR_USERNAME/diamond-education.git
   ```
   Or download ZIP → extract it.

3. **Open folder in terminal**
   - Open the project folder in File Explorer
   - Click the address bar → type `cmd` → press Enter

4. **Start the server**
   ```
   python -m http.server 8765
   ```

5. **Open in browser**
   ```
   http://localhost:8765
   ```

6. **Stop:** Press `Ctrl + C`

---

### macOS / Linux

1. **Python is pre-installed** on macOS. Check version:
   ```
   python3 --version
   ```
   If not found, install from: https://www.python.org/downloads/

2. **Clone the repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/diamond-education.git
   cd diamond-education
   ```

3. **Start the server**
   ```bash
   python3 -m http.server 8765
   ```

4. **Open in browser**
   ```
   http://localhost:8765
   ```

5. **Stop:** Press `Ctrl + C`

---

### Quick Start Scripts

**Windows** — double-click `start.bat`

**macOS/Linux** — run `./start.sh` in terminal

---

## 📁 Project Structure

```
diamond-education/
├── index.html        ← Main page
├── manifest.json     ← PWA manifest
├── sw.js             ← Service Worker
├── css/
│   └── main.css      ← All styles
├── js/
│   ├── i18n.js       ← 5-language system
│   └── app.js        ← Interactive logic
└── images/           ← Icons & assets
```

---

## 🌍 Languages

| Code | Language |
|------|----------|
| `tk` | Türkmen (default) |
| `en` | English |
| `ru` | Русский |
| `tr` | Türkçe |
| `zh` | 中文 |

Language preference is saved automatically in the browser.

---

## 📋 Features

- ✅ 5 language support with instant switching
- ✅ PWA (installable as mobile/desktop app)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ University search wizard
- ✅ Contact form
- ✅ Testimonials slider
- ✅ Animated statistics counter

---

© 2025 Diamond Education. All rights reserved.
