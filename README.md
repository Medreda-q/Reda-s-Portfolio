<div align="center">

# 🌌 Mohamed Reda Qiyaoui — Portfolio Website

**Personal cybersecurity portfolio with a dark constellation aesthetic**

[![Live Site](https://img.shields.io/badge/Live%20Site-mohamedreda.is--a.dev-0a0a0a?style=for-the-badge&logo=vercel&logoColor=white)](https://mohamedreda.is-a.dev)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Multilingual](https://img.shields.io/badge/Languages-EN%20%7C%20FR%20%7C%20ES-blueviolet?style=for-the-badge)](https://mohamedreda.is-a.dev)

</div>

---

## 📖 Overview

This is the source code for my personal portfolio website — a fully static, multilingual site built to showcase my cybersecurity projects, academic journey, and goals.

The design follows a **dark constellation aesthetic**: deep dark backgrounds, star-like particles, and subtle glow effects that create a futuristic atmosphere suited to a cybersecurity profile.

> 🔗 **Live:** [mohamedreda.is-a.dev](https://mohamedreda.is-a.dev)

---

## ✨ Features

- 🌍 **Multilingual** — Full support for English, French, and Spanish with a language switcher
- 🕐 **Timeline section** — Academic and professional journey narrated chronologically
- 🔐 **Projects showcase** — SOC deployment, Snort IDS/IPS, Web CV, and more
- 📋 **Impossible List** — A living page of personal and professional goals
- 📄 **CV page** — Trilingual online CV (separate repo: [reda-s-CV](https://github.com/Medreda-q/reda-s-CV))
- 🔑 **PGP Public Key** — Available for download directly from the site
- 📱 **Responsive** — Mobile-friendly layout
- 📬 **Contact section** — LinkedIn, GitHub, Email, Discord

---

## 🗂️ Project Structure

```
Reda-s-Portfolio/
├── index.html              # Main homepage (EN/FR/ES)
├── impossiblelist.html     # Impossible List page
├── assets/
│   ├── profile.jpg         # Profile photo
│   ├── est_logo-*.png      # EST Tétouan university logo
│   └── ...                 # Other assets
├── public_key.asc          # PGP public key
├── Snort_Files.zip         # Snort project presentation download
├── Wazuh_Simulation.zip    # SOC simulation presentation download
└── CV/                     # CV subpage
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 |
| Interactivity | Vanilla JavaScript |
| Multilingual | Custom JS language switcher (EN / FR / ES) |
| Hosting | [is-a.dev](https://is-a.dev) (free subdomain for developers) |
| Assets | Static files (images, ZIP downloads, PGP key) |

---

## 🚀 Running Locally

No build tools or dependencies required — this is a fully static site.

```bash
# Clone the repository
git clone https://github.com/Medreda-q/Reda-s-Portfolio.git

# Navigate into the folder
cd Reda-s-Portfolio

# Open in your browser
open index.html
# or just double-click index.html
```

For a better local dev experience with live reload:

```bash
# Using Python (no install needed)
python3 -m http.server 8080

# Then open http://localhost:8080
```

---

## 📌 Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, timeline, projects, contact |
| Impossible List | `/impossiblelist.html` | Living goals tracker |
| CV | `/CV` | Trilingual online CV |

---

## 🔐 Featured Projects (Showcased on Site)

| Project | Description |
|---------|-------------|
| **Attack Simulation Lab** | pfSense + Suricata + Wazuh SIEM — real-world SOC setup |
| **Snort IDS/IPS** | Network intrusion detection & prevention with custom rules |
| **Portfolio Website** | This site — static multilingual portfolio |
| **Web CV** | Trilingual CV built with Hugo |

---

## 📜 License

This project is open source. Feel free to use it as inspiration for your own portfolio — just don't copy the content directly.

---

<div align="center">

Made with ☕ and a lot of terminal sessions — Tétouan, Morocco 🇲🇦

</div>
