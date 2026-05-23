// ===========================
// Translations
// ===========================
const translations = {
  en: {
    "nav.home": "Home",
    "nav.impossibleList": "Impossible List",
    "nav.projects": "Projects",
    "nav.cv": "CV",
    "nav.contact": "Contact",
    "hero.subtitle": "Cybersecurity Student & Pentesting Enthusiast",
    "about.greeting": "Hey!",
    "about.bio": "I'm Mohamed Reda Qiyaoui from Morocco!<br />I'm a cybersecurity and information systems audit student at EST Tétouan. Passionate about penetration testing, network security and intrusion detection.<br />Feel free to get in touch or take a look at my work below.",
    "portfolio.title": "Portfolio",
    "portfolio.topProjects": "My top projects",
    "portfolio.visit": "VISIT WEBSITE",
    "portfolio.download": "DOWNLOAD PRESENTATION",
    "portfolio.viewRepo": "VIEW REPOSITORY",
    "project.snort": "Network Intrusion Detection and Prevention lab showcasing rule configuration, packet analysis, and real-time alerts.",
    "project.ctf": "Collection of Capture The Flag challenge solutions",
    "project.portfolioTitle": "Portfolio Website",
    "project.portfolio": "This portfolio built with a futuristic aesthetic, responsive design, and multi-language support (EN/FR/ES).",
    "project.cvTitle": "Web CV",
    "project.cv": "Trilingual (EN/FR/ES) online CV built with Hugo, featuring a clean design showcasing my personal info, skills and projects.",
    "project.wazuhTitle": "Attack Simulation",
    "project.wazuh": "Comprehensive network attack simulation and threat detection lab. Configured pfSense for routing, Suricata for intrusion detection, and Wazuh SIEM for real-time security monitoring.",
    "timeline.title": "Timeline",
    "timeline.dutTitle": "Cybersécurité et audit des systèmes d'information",
    "timeline.dutSubtitle": "<a href=\"https://est.uae.ma/\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5;\">École Supérieure de Technologie de Tétouan</a>",
    "timeline.dutDesc": "I started my university journey at EST Tétouan, pursuing a DUT in Cybersecurity and Information Systems Audit. Passionate about ethical hacking, network security and penetration testing.",
    "timeline.dutDate": "October 2025",
    "footer.contactTitle": "Contact me",
    "footer.sitemapTitle": "Site map",
    "footer.copyright": "© 2026 Mohamed Reda Qiyaoui",
    "impossible.by": "by Mohamed Reda Qiyaoui",
    "impossible.title": "The Impossible List",
    "impossible.desc": "An ever-evolving list of things to achieve. It's not just a bucket list; it's a living document of growth.",
    "impossible.cyber": "Cybersecurity & Pentesting Goals",
    "impossible.cyber.1": "Obtain OSCP certification",
    "impossible.cyber.4": "Obtain CISSP ISC2 certification",
    "impossible.cyber.2": "Find and publish a CVE",
    "impossible.cyber.3": "Reach top 3 in a CTF competition",
    "impossible.tech": "Technology Goals",
    "impossible.tech.1": "Install Arch Linux",
    "impossible.tech.2": "Code a mobile app with React Native",
    "impossible.tech.3": "Make a service or a website and sell it to my university",
    "impossible.academic": "Academic & Career Goals",
    "impossible.academic.1": "Graduate from EST Tétouan",
    "impossible.academic.2": "Land a Junior Pentester role",
    "impossible.gaming": "Gaming Goals",
    "impossible.gaming.1": "Reach 2000 in chess.com",
    "impossible.travel": "Traveling",
    "impossible.travel.1": "Visit Paris, France",
    "impossible.travel.2": "Visit Amsterdam, Netherlands",
    "impossible.travel.3": "Visit London, England",
    "impossible.travel.4": "See the Northern Lights",
    "impossible.travel.5": "Visit Saint Petersburg, Russia",
    "impossible.travel.6": "Visit Moscow, Russia",
    "impossible.travel.7": "Visit New York City, USA",
    "impossible.travel.8": "Visit Los Angeles, USA",
    "impossible.travel.9": "Visit Stockholm, Sweden",
    "impossible.travel.10": "Obtain dual citizenship with another country",
    "impossible.life": "Life goals & Misc",
    "impossible.life.1": "Own a house",
    "impossible.life.2": "Own a car",
    "impossible.life.3": "Get something named after me",
    "impossible.life.4": "Have a positive impact in the world",
    "impossible.life.5": "Start a blog",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.impossibleList": "Liste Impossible",
    "nav.projects": "Projets",
    "nav.cv": "CV",
    "nav.contact": "Contact",
    "hero.subtitle": "Étudiant en Cybersécurité & Passionné de Pentesting",
    "about.greeting": "Salut !",
    "about.bio": "Je suis Mohamed Reda Qiyaoui du Maroc !<br />Je suis étudiant en cybersécurité et audit des systèmes d'information à l'EST de Tétouan. Passionné par les tests d'intrusion, la sécurité réseau et la détection d'intrusions.<br />N'hésitez pas à me contacter ou à jeter un coup d'œil à mes travaux ci-dessous.",
    "portfolio.title": "Portfolio",
    "portfolio.topProjects": "Mes meilleurs projets",
    "portfolio.visit": "VISITER LE SITE",
    "portfolio.download": "TÉLÉCHARGER LA PRÉSENTATION",
    "portfolio.viewRepo": "VOIR LE DÉPÔT",
    "project.snort": "Laboratoire de détection et prévention d'intrusions réseau démontrant la configuration des règles, l'analyse des paquets et les alertes en temps réel.",
    "project.ctf": "Collection de solutions de défis Capture The Flag",
    "project.portfolioTitle": "Site Portfolio",
    "project.portfolio": "Ce portfolio construit avec une esthétique futuriste, un design responsive et un support multilingue (EN/FR/ES).",
    "project.cvTitle": "CV en Ligne",
    "project.cv": "CV trilingue (EN/FR/ES) construit avec Hugo, avec un design épuré présentant mes informations, compétences et projets.",
    "project.wazuhTitle": "Simulation d'Attaque",
    "project.wazuh": "Laboratoire complet de simulation d'attaques réseau et de détection des menaces. Configuration de pfSense, Suricata (IDS), et Wazuh SIEM pour la surveillance de sécurité en temps réel.",
    "timeline.title": "Parcours",
    "timeline.dutTitle": "Cybersécurité et audit des systèmes d'information",
    "timeline.dutSubtitle": "<a href=\"https://est.uae.ma/\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5;\">École Supérieure de Technologie de Tétouan</a>",
    "timeline.dutDesc": "J'ai commencé mon parcours universitaire à l'EST de Tétouan, poursuivant un DUT en Cybersécurité et Audit des Systèmes d'Information. Passionné par le hacking éthique, la sécurité réseau et les tests d'intrusion.",
    "timeline.dutDate": "Octobre 2025",
    "footer.contactTitle": "Me contacter",
    "footer.sitemapTitle": "Plan du site",
    "footer.copyright": "© 2026 Mohamed Reda Qiyaoui",
    "impossible.by": "by Mohamed Reda Qiyaoui",
    "impossible.title": "La Liste Impossible",
    "impossible.desc": "Une liste en constante évolution de choses à accomplir. Ce n'est pas juste une bucket list ; c'est un document vivant de croissance.",
    "impossible.cyber": "Objectifs en Cybersécurité et Pentesting",
    "impossible.cyber.1": "Obtenir la certification OSCP",
    "impossible.cyber.4": "Obtenir la certification CISSP ISC2",
    "impossible.cyber.2": "Trouver et publier une CVE",
    "impossible.cyber.3": "Atteindre le top 3 dans une compétition CTF",
    "impossible.tech": "Objectifs en Technologie",
    "impossible.tech.1": "Installer Arch Linux",
    "impossible.tech.2": "Coder une application mobile avec React Native",
    "impossible.tech.3": "Créer un service ou un site web et le vendre à mon université",
    "impossible.academic": "Objectifs Académiques et Professionnels",
    "impossible.academic.1": "Être diplômé de l'EST Tétouan",
    "impossible.academic.2": "Décrocher un poste de Pentester Junior",
    "impossible.gaming": "Objectifs de Jeu",
    "impossible.gaming.1": "Atteindre 2000 sur chess.com",
    "impossible.travel": "Voyages",
    "impossible.travel.1": "Visiter Paris, France",
    "impossible.travel.2": "Visiter Amsterdam, Pays-Bas",
    "impossible.travel.3": "Visiter Londres, Angleterre",
    "impossible.travel.4": "Voir les aurores boréales",
    "impossible.travel.5": "Visiter Saint-Pétersbourg, Russie",
    "impossible.travel.6": "Visiter Moscou, Russie",
    "impossible.travel.7": "Visiter New York, USA",
    "impossible.travel.8": "Visiter Los Angeles, USA",
    "impossible.travel.9": "Visiter Stockholm, Suède",
    "impossible.travel.10": "Obtenir la double nationalité avec un autre pays",
    "impossible.life": "Objectifs de Vie & Divers",
    "impossible.life.1": "Posséder une maison",
    "impossible.life.2": "Posséder une voiture",
    "impossible.life.3": "Avoir quelque chose qui porte mon nom",
    "impossible.life.4": "Avoir un impact positif sur le monde",
    "impossible.life.5": "Lancer un blog",
  },
  es: {
    "nav.home": "Inicio",
    "nav.impossibleList": "Lista Imposible",
    "nav.projects": "Proyectos",
    "nav.cv": "CV",
    "nav.contact": "Contacto",
    "hero.subtitle": "Estudiante de Ciberseguridad & Entusiasta del Pentesting",
    "about.greeting": "¡Hola!",
    "about.bio": "¡Soy Mohamed Reda Qiyaoui de Marruecos!<br />Soy estudiante de ciberseguridad y auditoría de sistemas de información en EST Tetuán. Apasionado por las pruebas de penetración, la seguridad de redes y la detección de intrusiones.<br />No dudes en contactarme o echar un vistazo a mi trabajo a continuación.",
    "portfolio.title": "Portafolio",
    "portfolio.topProjects": "Mis mejores proyectos",
    "portfolio.visit": "VISITAR SITIO",
    "portfolio.download": "DESCARGAR PRESENTACIÓN",
    "portfolio.viewRepo": "VER REPOSITORIO",
    "project.snort": "Laboratorio de detección y prevención de intrusiones en red que demuestra la configuración de reglas, análisis de paquetes y alertas en tiempo real.",
    "project.ctf": "Colección de soluciones de desafíos Capture The Flag",
    "project.portfolioTitle": "Sitio Web Portfolio",
    "project.portfolio": "Este portafolio construido con una estética futurista, diseño responsivo y soporte multilingüe (EN/FR/ES).",
    "project.cvTitle": "CV en Línea",
    "project.cv": "CV trilingüe (EN/FR/ES) construido con Hugo, con un diseño limpio que muestra mi información personal, habilidades y proyectos.",
    "project.wazuhTitle": "Simulación de Ataque",
    "project.wazuh": "Laboratorio completo de simulación de ataques de red y detección de amenazas. Configuración de pfSense, Suricata (IDS) y Wazuh SIEM para monitorización de seguridad en tiempo real.",
    "timeline.title": "Trayectoria",
    "timeline.dutTitle": "Ciberseguridad y auditoría de sistemas de información",
    "timeline.dutSubtitle": "<a href=\"https://est.uae.ma/\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5;\">Escuela Superior de Tecnología de Tetuán</a>",
    "timeline.dutDesc": "Comencé mi viaje universitario en EST Tetuán, cursando un DUT en Ciberseguridad y Auditoría de Sistemas de Información. Apasionado por el hacking ético, la seguridad de redes y las pruebas de penetración.",
    "timeline.dutDate": "Octubre 2025",
    "footer.contactTitle": "Contáctame",
    "footer.sitemapTitle": "Mapa del sitio",
    "footer.copyright": "© 2026 Mohamed Reda Qiyaoui",
    "impossible.by": "by Mohamed Reda Qiyaoui",
    "impossible.title": "La Lista Imposible",
    "impossible.desc": "Una lista en constante evolución de cosas por lograr. No es solo una lista de deseos; es un documento vivo de crecimiento.",
    "impossible.cyber": "Metas de Ciberseguridad y Pentesting",
    "impossible.cyber.1": "Obtener la certificación OSCP",
    "impossible.cyber.4": "Obtener la certificación CISSP ISC2",
    "impossible.cyber.2": "Encontrar y publicar un CVE",
    "impossible.cyber.3": "Alcanzar el top 3 en una competición de CTF",
    "impossible.tech": "Metas de Tecnología",
    "impossible.tech.1": "Instalar Arch Linux",
    "impossible.tech.2": "Programar una aplicación móvil con React Native",
    "impossible.tech.3": "Crear un servicio o un sitio web y venderlo a mi universidad",
    "impossible.academic": "Metas Académicas y Profesionales",
    "impossible.academic.1": "Graduarme de EST Tetuán",
    "impossible.academic.2": "Conseguir un puesto de Pentester Junior",
    "impossible.gaming": "Metas de Juego",
    "impossible.gaming.1": "Alcanzar 2000 en chess.com",
    "impossible.travel": "Viajes",
    "impossible.travel.1": "Visitar París, Francia",
    "impossible.travel.2": "Visitar Ámsterdam, Países Bajos",
    "impossible.travel.3": "Visitar Londres, Inglaterra",
    "impossible.travel.4": "Ver las auroras boreales",
    "impossible.travel.5": "Visitar San Petersburgo, Rusia",
    "impossible.travel.6": "Visitar Moscú, Rusia",
    "impossible.travel.7": "Visitar Nueva York, EE. UU.",
    "impossible.travel.8": "Visitar Los Ángeles, EE. UU.",
    "impossible.travel.9": "Visitar Estocolmo, Suecia",
    "impossible.travel.10": "Obtener la doble ciudadanía con otro país",
    "impossible.life": "Metas de Vida y Miscelánea",
    "impossible.life.1": "Tener una casa propia",
    "impossible.life.2": "Tener un coche propio",
    "impossible.life.3": "Tener algo que lleve mi nombre",
    "impossible.life.4": "Tener un impacto positivo en el mundo",
    "impossible.life.5": "Empezar un blog",
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
