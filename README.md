<div align="center">

# Reda's Personal Portfolio & Online CV

<img width="1920" height="1080" alt="Portfolio Image" src="https://github.com/user-attachments/assets/39b6ec1e-0dd2-44de-a990-cad418f9dc88" />

**A personal portfolio website with a dark constellation aesthetic and a built-in trilingual online CV**

[![Portfolio](https://img.shields.io/badge/Portfolio-mohamedreda.is--a.dev-blue?style=flat&logo=vercel)](https://mohamedreda.is-a.dev)
[![CV](https://img.shields.io/badge/CV-mohamedreda.is--a.dev%2FCV-blue?style=flat&logo=google-docs)](https://mohamedreda.is-a.dev/CV)
[![Hugo](https://img.shields.io/badge/CV%20Built%20with-Hugo-FF4088?style=flat&logo=hugo&logoColor=white)](https://gohugo.io)
[![Languages](https://img.shields.io/badge/Languages-EN%20%7C%20FR%20%7C%20ES-blueviolet?style=flat)](https://mohamedreda.is-a.dev)

</div>

---

## 📖 Overview

This repository hosts my complete personal portfolio website and my trilingual online CV. 

- **Portfolio**: A sleek static site designed with a dark constellation aesthetic (glowing nodes, deep space backdrop, interactive grid).
- **CV**: A fast-loading, clean, and highly readable web CV built using Hugo with full support for light/dark themes.

> Live links:  
> 🔗 **Portfolio**: [mohamedreda.is-a.dev](https://mohamedreda.is-a.dev)  
> 🔗 **Online CV**: [mohamedreda.is-a.dev/CV](https://mohamedreda.is-a.dev/CV)

---

## 🌟 Key Features

- **Multilingual Mode** — Native support for English, French, and Spanish with interactive language switchers.
- **Projects Showcase** — Highlighting major works like CyberStorm Club, DoTask (AI Task Manager), Snort IDS/IPS, and others.
- **Impossible List** — An ever-evolving public roadmap of my technical, academic, and life goals.
- **Responsive Layouts** — Optimized for desktops, tablets, and smartphones.
- **Unified Build Integration** — Vercel builds the main site and compiles the Hugo CV into `dist/cv/` in one single workflow.

---

## 🛠️ Tech Stack

### Main Portfolio Website
- **Markup & Styling**: HTML5, Vanilla CSS3 (custom CSS variables & keyframe animations)
- **Interactivity**: Vanilla JavaScript
- **Multilingual Support**: Custom JS translation engine

### Online CV (`cv-project/`)
- **Static Site Generator**: [Hugo Extended](https://gohugo.io)
- **Content Engine**: Structured YAML files per language
- **Iconography**: FontAwesome 6

---

## 📂 Project Structure

```
Reda-s-Portfolio/
├── index.html               # Main portfolio landing page
├── impossiblelist.html      # Goals tracker page
├── vercel.json              # Vercel deployment routes, redirects, & header rules
├── build.sh                 # Unified shell script for Vercel builds
├── src/                     # Stylesheets and main script logic
│   ├── main.js              # Translation dictionary & UI handlers
│   └── overrides.css        # Interactive styling rules
├── public/                  # Static resources (images, PDFs)
└── cv-project/              # Embedded Hugo CV source code
    ├── config.toml          # Multilingual Hugo configuration
    ├── data/                # Translated CV contents (YAML)
    │   ├── content.en.yaml
    │   ├── content.fr.yaml
    │   └── content.es.yaml
    ├── layouts/             # Hugo HTML structural layouts
    └── static/              # CV-specific attachments & resources
```

---

## 📸 Screenshots

### Web CV (Light & Dark Themes)
<img width="1248" height="878" alt="mohamedreda is-a dev_CV" src="https://github.com/user-attachments/assets/113b6529-d3dd-496e-871f-c73c20cf94ec" />
<img width="1248" height="878" alt="mohamedreda is-a dev_CV (1)" src="https://github.com/user-attachments/assets/7af898fa-e84b-4e25-a982-53c1431b555f" />

---

## 📜 License

This repository is **source-available** for educational purposes:
- You are free to explore, study, and draw inspiration from the code.
- You are **not** permitted to copy, host, redistribute, or repurpose this portfolio as-is.
- You may **not** use my name, photography, or personal content.

© 2026 Mohamed Reda Qiyaoui — All rights reserved.
