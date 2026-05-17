// ===========================
// Translations
// ===========================
const translations = {
  en: {
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.subtitle": "Cybersecurity Student & Pentesting Enthusiast",
    "about.greeting": "Hey!",
    "about.bio": "I'm Mohamed Reda Qiyaoui from Morocco!<br />I'm a cybersecurity and information systems audit student at EST Tétouan. Passionate about penetration testing, network security and intrusion detection.<br />Feel free to get in touch or take a look at my work below.",
    "portfolio.title": "Portfolio",
    "portfolio.topProjects": "My top projects",
    "portfolio.visit": "VISIT WEBSITE",
    "portfolio.download": "DOWNLOAD PRESENTATION",
    "project.snort": "Network Intrusion Detection and Prevention",
    "project.ctf": "Collection of Capture The Flag challenge solutions",
    "project.portfolioTitle": "Portfolio Website",
    "project.portfolio": "This portfolio built with a futuristic aesthetic",
    "timeline.title": "Timeline",
    "timeline.dutTitle": "Cybersécurité et audit des systèmes d'information",
    "timeline.dutSubtitle": "<a href=\"https://est.uae.ma/\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5;\">École Supérieure de Technologie de Tétouan</a>",
    "timeline.dutDesc": "I started my university journey at EST Tétouan, pursuing a DUT in Cybersecurity and Information Systems Audit. Passionate about ethical hacking, network security and penetration testing.",
    "timeline.dutDate": "October 2025",
    "footer.contactTitle": "Contact me",
    "footer.sitemapTitle": "Site map",
    "footer.copyright": "© 2026 Mohamed Reda Qiyaoui",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "hero.subtitle": "Étudiant en Cybersécurité & Passionné de Pentesting",
    "about.greeting": "Salut !",
    "about.bio": "Je suis Mohamed Reda Qiyaoui du Maroc !<br />Je suis étudiant en cybersécurité et audit des systèmes d'information à l'EST de Tétouan. Passionné par les tests d'intrusion, la sécurité réseau et la détection d'intrusions.<br />N'hésitez pas à me contacter ou à jeter un coup d'œil à mes travaux ci-dessous.",
    "portfolio.title": "Portfolio",
    "portfolio.topProjects": "Mes meilleurs projets",
    "portfolio.visit": "VISITER LE SITE",
    "portfolio.download": "TÉLÉCHARGER LA PRÉSENTATION",
    "project.snort": "Détection et Prévention d'Intrusions Réseau",
    "project.ctf": "Collection de solutions de défis Capture The Flag",
    "project.portfolioTitle": "Site Portfolio",
    "project.portfolio": "Ce portfolio construit avec une esthétique futuriste",
    "timeline.title": "Parcours",
    "timeline.dutTitle": "Cybersécurité et audit des systèmes d'information",
    "timeline.dutSubtitle": "<a href=\"https://est.uae.ma/\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5;\">École Supérieure de Technologie de Tétouan</a>",
    "timeline.dutDesc": "J'ai commencé mon parcours universitaire à l'EST de Tétouan, poursuivant un DUT en Cybersécurité et Audit des Systèmes d'Information. Passionné par le hacking éthique, la sécurité réseau et les tests d'intrusion.",
    "timeline.dutDate": "Octobre 2025",
    "footer.contactTitle": "Me contacter",
    "footer.sitemapTitle": "Plan du site",
    "footer.copyright": "© 2026 Mohamed Reda Qiyaoui",
  },
  es: {
    "nav.home": "Inicio",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.subtitle": "Estudiante de Ciberseguridad & Entusiasta del Pentesting",
    "about.greeting": "¡Hola!",
    "about.bio": "¡Soy Mohamed Reda Qiyaoui de Marruecos!<br />Soy estudiante de ciberseguridad y auditoría de sistemas de información en EST Tetuán. Apasionado por las pruebas de penetración, la seguridad de redes y la detección de intrusiones.<br />No dudes en contactarme o echar un vistazo a mi trabajo a continuación.",
    "portfolio.title": "Portafolio",
    "portfolio.topProjects": "Mis mejores proyectos",
    "portfolio.visit": "VISITAR SITIO",
    "portfolio.download": "DESCARGAR PRESENTACIÓN",
    "project.snort": "Detección y Prevención de Intrusiones en Red",
    "project.ctf": "Colección de soluciones de desafíos Capture The Flag",
    "project.portfolioTitle": "Sitio Web Portfolio",
    "project.portfolio": "Este portafolio construido con una estética futurista",
    "timeline.title": "Trayectoria",
    "timeline.dutTitle": "Ciberseguridad y auditoría de sistemas de información",
    "timeline.dutSubtitle": "<a href=\"https://est.uae.ma/\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5;\">Escuela Superior de Tecnología de Tetuán</a>",
    "timeline.dutDesc": "Comencé mi viaje universitario en EST Tetuán, cursando un DUT en Ciberseguridad y Auditoría de Sistemas de Información. Apasionado por el hacking ético, la seguridad de redes y las pruebas de penetración.",
    "timeline.dutDate": "Octubre 2025",
    "footer.contactTitle": "Contáctame",
    "footer.sitemapTitle": "Mapa del sitio",
    "footer.copyright": "© 2026 Mohamed Reda Qiyaoui",
  },
};

const langMeta = {
  en: { flag: "🇬🇧", code: "EN" },
  fr: { flag: "🇫🇷", code: "FR" },
  es: { flag: "🇪🇸", code: "ES" },
};

// ===========================
// Language Switcher
// ===========================
function setLanguage(lang) {
  if (!translations[lang]) lang = "en";

  // Update all data-i18n elements (textContent)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update all data-i18n-html elements (innerHTML for <br> tags)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update the lang attribute on <html>
  document.documentElement.lang = lang;

  // Update the switcher button display
  const flagEl = document.getElementById("lang-flag");
  const codeEl = document.getElementById("lang-code");
  if (flagEl && codeEl && langMeta[lang]) {
    flagEl.textContent = langMeta[lang].flag;
    codeEl.textContent = langMeta[lang].code;
  }

  // Save preference
  localStorage.setItem("preferred-lang", lang);

  // Close dropdown
  const dropdown = document.getElementById("lang-dropdown");
  if (dropdown) dropdown.classList.remove("open");
}

function initLanguageSwitcher() {
  const btn = document.getElementById("lang-btn");
  const dropdown = document.getElementById("lang-dropdown");

  if (btn && dropdown) {
    // Toggle dropdown
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("open");
    });

    // Language option buttons
    document.querySelectorAll(".lang-option").forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        const lang = option.getAttribute("data-lang");
        setLanguage(lang);
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
      dropdown.classList.remove("open");
    });
  }

  // Load saved language or default to English
  const saved = localStorage.getItem("preferred-lang") || "en";
  setLanguage(saved);
}

// ===========================
// tsParticles
// ===========================
function setupParticlesBackground() {
  tsParticles.load("tsparticles", {
    particles: {
      links: {
        enable: true,
        distance: 100,
        opacity: 0.5,
        color: "#ffffff",
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 55,
      },
      size: {
        value: 3,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 2,
        straight: false,
      },
      opacity: {
        value: 0.5,
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
    },
    retina_detect: true,
  });
}

// Load tsParticles script dynamically
const script = document.createElement("script");
script.src =
  "https://cdn.jsdelivr.net/npm/tsparticles-preset-links@2.12.0/tsparticles.preset.links.bundle.min.js";
script.onload = setupParticlesBackground;
document.body.appendChild(script);

// ===========================
// Drawer logic
// ===========================
const drawerOpen = document.getElementById("drawer-open");
const drawerClose = document.getElementById("drawer-close");
const drawer = document.getElementById("navbar-drawer");

if (drawerOpen && drawerClose && drawer) {
  drawerOpen.addEventListener("click", () => drawer.showModal());
  drawerClose.addEventListener("click", () => drawer.close());
}

// ===========================
// Init language switcher on DOM ready
// ===========================
initLanguageSwitcher();
