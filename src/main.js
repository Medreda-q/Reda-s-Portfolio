// ===========================
// Translations
// ===========================
const translations = {
  en: {
    "nav.home": "Home",
    "nav.impossibleList": "Impossible List",
    "nav.cv": "CV",
    "nav.contact": "Contact",
    "hero.subtitle": "Cybersecurity Student & Web Developer",
    "about.greeting": "Hey!",
    "about.bio": "I'm Mohamed Reda Qiyaoui from Morocco!<br />I'm a cybersecurity and information systems audit student at EST Tétouan, and a web developer. Passionate about penetration testing, network security and intrusion detection.<br />Feel free to get in touch or take a look at my work below.",
    "portfolio.topProjects": "My top projects",
    "portfolio.download": "DOWNLOAD PRESENTATION",
    "portfolio.viewRepo": "VIEW REPOSITORY",
    "project.dotaskTitle": "DoTask",
    "project.dotask": "A smart task manager with integrated AI to help organize tasks, manage schedules, and optimize daily productivity.",
    "project.snort": "Network Intrusion Detection and Prevention lab showcasing rule configuration, packet analysis, and real-time alerts.",
    "project.portfolioTitle": "Portfolio Website",
    "project.portfolio": "This portfolio was built with a futuristic aesthetic, responsive design, and multi-language support (EN/FR/ES).",
    "project.cvTitle": "Web CV",
    "project.cv": "Trilingual (EN/FR/ES) online CV built with Hugo, featuring a clean design showcasing my personal info, skills and projects.",
    "project.wazuhTitle": "Attack Simulation",
    "project.wazuh": "Comprehensive network attack simulation and threat detection lab. Configured pfSense for routing, Suricata for intrusion detection, and Wazuh SIEM for real-time security monitoring.",
    "timeline.title": "Timeline",
    "timeline.dotaskTitle": "DoTask — AI-Based Task Manager",
    "timeline.dotaskDesc": "Developed a <a href=\"https://github.com/Medreda-q/DoTask-manager\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5; font-size: 1.05em; text-decoration: none; font-weight: 500;\">premium full-stack task management web application</a> using ReactJS (TypeScript, TailwindCSS, Zustand, React Query) and Flask (Python, SQLite, SQLAlchemy). Built with AI agent features to make task management easier, secure Google OAuth, email password recovery, and a fully documented REST API with JWT authentication.",
    "timeline.dotaskDate": "June 2026",
    "timeline.cyberstormTitle": "CyberStorm — Cybersecurity Club Website",
    "timeline.cyberstormDesc": "Developed the official website for the <a href=\"https://cyber-storm-lake.vercel.app/\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5; font-size: 1.05em; text-decoration: none; font-weight: 500;\">CyberStorm</a> cybersecurity club as a member of its administrative and technical team, to showcase club activities, capture interest, and share resources.",
    "timeline.cyberstormDate": "June 2026",
    "timeline.dutTitle": "Cybersécurité et audit des systèmes d'information",
    "timeline.dutDesc": "I started my university journey at <a href=\"https://est.uae.ma/\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5; font-size: 1.05em; text-decoration: none; font-weight: 500;\">École Supérieure de Technologie de Tétouan</a>, diving deep into ethical hacking, network security and penetration testing.",
    "timeline.dutDate": "October 2025",
    "footer.contactTitle": "Contact me",
    "footer.sitemapTitle": "Site map",
    "footer.copyright": "© 2026 Mohamed Reda Qiyaoui. All rights reserved.",
    "impossible.by": "by Mohamed Reda Qiyaoui",
    "impossible.title": "The Impossible List",
    "impossible.cyber": "Cybersecurity & Pentesting Goals",
    "impossible.cyber.1": "Obtain OSCP certification",
    "impossible.cyber.4": "Obtain CISSP ISC2 certification",
    "impossible.cyber.2": "Find and publish a CVE",
    "impossible.cyber.3": "Reach top 3 in a CTF competition",
    "impossible.tech": "Technology Goals",
    "impossible.tech.1": "Install Arch Linux",
    "impossible.tech.2": "Code a mobile app with React Native",
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
    "nav.cv": "CV",
    "nav.contact": "Contact",
    "hero.subtitle": "Étudiant en Cybersécurité & Développeur Web",
    "about.greeting": "Salut !",
    "about.bio": "Je suis Mohamed Reda Qiyaoui du Maroc !<br />Je suis étudiant en cybersécurité et audit des systèmes d'information à l'EST de Tétouan, et développeur web. Passionné par les tests d'intrusion, la sécurité réseau et la détection d'intrusions.<br />N'hésitez pas à me contacter ou à jeter un coup d'œil à mes travaux ci-dessous.",
    "portfolio.topProjects": "Mes meilleurs projets",
    "portfolio.download": "TÉLÉCHARGER LA PRÉSENTATION",
    "portfolio.viewRepo": "VOIR LE DÉPÔT",
    "project.dotaskTitle": "DoTask",
    "project.dotask": "Un gestionnaire de tâches intelligent avec IA intégrée pour aider à organiser les tâches, gérer les plannings et optimiser la productivité.",
    "project.snort": "Laboratoire de détection et prévention d'intrusions réseau démontrant la configuration des règles, l'analyse des paquets et les alertes en temps réel.",
    "project.portfolioTitle": "Site Portfolio",
    "project.portfolio": "Ce portfolio construit avec une esthétique futuriste, un design responsive et un support multilingue (EN/FR/ES).",
    "project.cvTitle": "CV en Ligne",
    "project.cv": "CV trilingue (EN/FR/ES) construit avec Hugo, avec un design épuré présentant mes informations, compétences et projets.",
    "project.wazuhTitle": "Simulation d'Attaque",
    "project.wazuh": "Laboratoire complet de simulation d'attaques réseau et de détection des menaces. Configuration de pfSense, Suricata (IDS), et Wazuh SIEM pour la surveillance de sécurité en temps réel.",
    "timeline.title": "Parcours",
    "timeline.dotaskTitle": "DoTask — Gestionnaire de tâches basé sur l'IA",
    "timeline.dotaskDesc": "Développement d'une <a href=\"https://github.com/Medreda-q/DoTask-manager\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5; font-size: 1.05em; text-decoration: none; font-weight: 500;\">application web de gestion de tâches premium</a> utilisant ReactJS (TypeScript, TailwindCSS, Zustand, React Query) et Flask (Python, SQLite, SQLAlchemy). Conçue avec des fonctionnalités d'agent IA pour faciliter la gestion des tâches, Google OAuth, la récupération par e-mail et une API REST documentée avec JWT.",
    "timeline.dotaskDate": "Juin 2026",
    "timeline.cyberstormTitle": "CyberStorm — Site Web du Club de Cybersécurité",
    "timeline.cyberstormDesc": "Développement du site web officiel du club de cybersécurité <a href=\"https://cyber-storm-lake.vercel.app/\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5; font-size: 1.05em; text-decoration: none; font-weight: 500;\">CyberStorm</a> en tant que membre de son équipe administrative et technique, afin de présenter les activités du club, susciter l'intérêt et partager des ressources.",
    "timeline.cyberstormDate": "Juin 2026",
    "timeline.dutTitle": "Cybersécurité et audit des systèmes d'information",
    "timeline.dutDesc": "J'ai commencé mon parcours universitaire à l'<a href=\"https://est.uae.ma/\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5; font-size: 1.05em; text-decoration: none; font-weight: 500;\">École Supérieure de Technologie de Tétouan</a>, plongeant dans le hacking éthique, la sécurité réseau et les tests d'intrusion.",
    "timeline.dutDate": "Octobre 2025",
    "footer.contactTitle": "Me contacter",
    "footer.sitemapTitle": "Plan du site",
    "footer.copyright": "© 2026 Mohamed Reda Qiyaoui. Tous droits réservés.",
    "impossible.by": "by Mohamed Reda Qiyaoui",
    "impossible.title": "La Liste Impossible",
    "impossible.cyber": "Objectifs en Cybersécurité et Pentesting",
    "impossible.cyber.1": "Obtenir la certification OSCP",
    "impossible.cyber.4": "Obtenir la certification CISSP ISC2",
    "impossible.cyber.2": "Trouver et publier une CVE",
    "impossible.cyber.3": "Atteindre le top 3 dans une compétition CTF",
    "impossible.tech": "Objectifs en Technologie",
    "impossible.tech.1": "Installer Arch Linux",
    "impossible.tech.2": "Coder une application mobile avec React Native",
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
    "nav.cv": "CV",
    "nav.contact": "Contacto",
    "hero.subtitle": "Estudiante de Ciberseguridad & Desarrollador Web",
    "about.greeting": "¡Hola!",
    "about.bio": "¡Soy Mohamed Reda Qiyaoui de Marruecos!<br />Soy estudiante de ciberseguridad y auditoría de sistemas de información en EST Tetuán, y desarrollador web. Apasionado por las pruebas de penetración, la seguridad de redes y la detección de intrusiones.<br />No dudes en contactarme o echar un vistazo a mi trabajo a continuación.",
    "portfolio.topProjects": "Mis mejores proyectos",
    "portfolio.download": "DESCARGAR PRESENTACIÓN",
    "portfolio.viewRepo": "VER REPOSITORIO",
    "project.dotaskTitle": "DoTask",
    "project.dotask": "Un administrador de tareas inteligente con IA integrada para ayudar a organizar tareas, gestionar horarios y optimizar la productividad.",
    "project.snort": "Laboratorio de detección y prevención de intrusiones en red que demuestra la configuración de reglas, análisis de paquetes y alertas en tiempo real.",
    "project.portfolioTitle": "Sitio Web Portfolio",
    "project.portfolio": "Este portafolio construido con una estética futurista, diseño responsivo y soporte multilingüe (EN/FR/ES).",
    "project.cvTitle": "CV en Línea",
    "project.cv": "CV trilingüe (EN/FR/ES) construido con Hugo, con un diseño limpio que muestra mi información personal, habilidades y proyectos.",
    "project.wazuhTitle": "Simulación de Ataque",
    "project.wazuh": "Laboratorio completo de simulación de ataques de red y detección de amenazas. Configuración de pfSense, Suricata (IDS) y Wazuh SIEM para monitorización de seguridad en tiempo real.",
    "timeline.title": "Trayectoria",
    "timeline.dotaskTitle": "DoTask — Gestor de tareas basado en IA",
    "timeline.dotaskDesc": "Desarrollo de una <a href=\"https://github.com/Medreda-q/DoTask-manager\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5; font-size: 1.05em; text-decoration: none; font-weight: 500;\">aplicación web premium de gestión de tareas</a> utilizando ReactJS (TypeScript, TailwindCSS, Zustand, React Query) y Flask (Python, SQLite, SQLAlchemy). Diseñada con funciones de agente de IA para facilitar la organización de tareas, Google OAuth, recuperación por correo y una API REST documentada con JWT.",
    "timeline.dotaskDate": "Junio 2026",
    "timeline.cyberstormTitle": "CyberStorm — Sitio Web del Club de Ciberseguridad",
    "timeline.cyberstormDesc": "Desarrollo del sitio web oficial del club de ciberseguridad <a href=\"https://cyber-storm-lake.vercel.app/\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5; font-size: 1.05em; text-decoration: none; font-weight: 500;\">CyberStorm</a> como miembro de su equipo administrativo y técnico, con el fin de mostrar las actividades del club, despertar interés y compartir recursos.",
    "timeline.cyberstormDate": "Junio 2026",
    "timeline.dutTitle": "Ciberseguridad y auditoría de sistemas de información",
    "timeline.dutDesc": "Comencé mi viaje universitario en la <a href=\"https://est.uae.ma/\" target=\"_blank\" rel=\"noopener\" style=\"color: #0077b5; font-size: 1.05em; text-decoration: none; font-weight: 500;\">Escuela Superior de Tecnología de Tetuán</a>, sumergiéndome en el hacking ético, la seguridad de redes y las pruebas de penetración.",
    "timeline.dutDate": "Octubre 2025",
    "footer.contactTitle": "Contáctame",
    "footer.sitemapTitle": "Mapa del sitio",
    "footer.copyright": "© 2026 Mohamed Reda Qiyaoui. Todos los derechos reservados.",
    "impossible.by": "by Mohamed Reda Qiyaoui",
    "impossible.title": "La Lista Imposible",
    "impossible.cyber": "Metas de Ciberseguridad y Pentesting",
    "impossible.cyber.1": "Obtener la certificación OSCP",
    "impossible.cyber.4": "Obtener la certificación CISSP ISC2",
    "impossible.cyber.2": "Encontrar y publicar un CVE",
    "impossible.cyber.3": "Alcanzar el top 3 en una competición de CTF",
    "impossible.tech": "Metas de Tecnología",
    "impossible.tech.1": "Instalar Arch Linux",
    "impossible.tech.2": "Programar una aplicación móvil con React Native",
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
  const codeEl = document.getElementById("lang-code");
  const codeElDesktop = document.getElementById("lang-code-desktop");
  if (codeEl && langMeta[lang]) {
    codeEl.textContent = langMeta[lang].code;
  }
  if (codeElDesktop && langMeta[lang]) {
    codeElDesktop.textContent = langMeta[lang].code;
  }

  // Save preference
  try { localStorage.setItem("preferred-lang", lang); } catch {}

  // Close dropdowns
  const dropdown = document.getElementById("lang-dropdown");
  const dropdownDesktop = document.getElementById("lang-dropdown-desktop");
  if (dropdown) dropdown.classList.remove("open");
  if (dropdownDesktop) dropdownDesktop.classList.remove("open");
}

function initLanguageSwitcher() {
  const btn = document.getElementById("lang-btn");
  const dropdown = document.getElementById("lang-dropdown");
  const btnDesktop = document.getElementById("lang-btn-desktop");
  const dropdownDesktop = document.getElementById("lang-dropdown-desktop");

  if (btn && dropdown) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("open");
      if (dropdownDesktop) dropdownDesktop.classList.remove("open");
    });
  }

  if (btnDesktop && dropdownDesktop) {
    btnDesktop.addEventListener("click", (e) => {
      e.stopPropagation();
      if (dropdown) dropdown.classList.remove("open");
      dropdownDesktop.classList.toggle("open");
    });
  }

  // Language option buttons
  document.querySelectorAll(".lang-option").forEach((option) => {
    option.addEventListener("click", (e) => {
      e.stopPropagation();
      const lang = option.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", () => {
    if (dropdown) dropdown.classList.remove("open");
    if (dropdownDesktop) dropdownDesktop.classList.remove("open");
  });

  // Load saved language or default to English
  const saved = (() => { try { return localStorage.getItem("preferred-lang"); } catch { return null; } })() || "en";
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
script.onerror = () => console.warn("tsParticles failed to load — particles disabled.");
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
// Navbar Scroll Sticky Logic
// ===========================
const navbar = document.querySelector("body > header > nav");
const trigger = document.getElementById("navbar-trigger");

if (navbar && trigger) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navbar.classList.remove("navbar--sticky");
        } else {
          navbar.classList.add("navbar--sticky");
        }
      });
    },
    {
      rootMargin: "0px 0px 0px 0px",
      threshold: 0,
    }
  );

  observer.observe(trigger);
}

// ===========================
// Init language switcher on DOM ready
// ===========================
initLanguageSwitcher();
