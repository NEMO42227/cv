const cvFileDownloadOptions = [
  {
    language: "es",
    shortLabel: "ESP",
    labels: {
      es: "Curriculum (ES)",
      en: "Spanish CV (ES)"
    },
    url: "/api/cv/files/es",
    fileName: "DanielSoria-CV-ES.pdf"
  },
  {
    language: "en",
    shortLabel: "ENG",
    labels: {
      es: "Curriculum (EN)",
      en: "Resume (EN)"
    },
    url: "/api/cv/files/en",
    fileName: "DanielSoria-CV-EN.pdf"
  }
];

const cvData = {
  defaultLanguage: "es",
  languages: {
    es: {
      name: "Daniel Soria González",
      tagline: "Ingeniero en Sistemas Computacionales (Egreso Jul 2026)",
      bio: "Soy estudiante de ISC enfocado en inteligencia artificial, IoT y visión por computadora. Desarrollo soluciones en tiempo real y productos web con arquitecturas multihilo que priorizan rendimiento y calidad.",
      location: "Ciudad de México, México",
      availability: "Busco prácticas profesionales y proyectos de alto impacto",
      socials: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/danielsoglz" },
        { label: "GitHub", url: "https://github.com/soriadg" },
        { label: "Correo", url: "mailto:soriadgonzalez@gmail.com" }
      ],
      skills: [
        {
          title: "Lenguajes y Frameworks",
          items: ["React", "Node.js", "Python", "C++", "Java", "Kotlin", "JavaScript", "HTML/CSS"]
        },
        {
          title: "Especialidades",
          items: ["Visión por computadora", "IoT", "Inteligencia Artificial", "Procesamiento en tiempo real"]
        },
        {
          title: "Herramientas y Plataformas",
          items: ["MySQL", "REST APIs", "Git", "Linux", "Windows"]
        }
      ],
      projects: [
        {
          id: "contador-clasificador-vehiculos",
          name: "Contador y Clasificador de Vehículos",
          description: "Sistema de detección, conteo y clasificación de vehículos en tiempo real impulsado por IA.",
          stack: ["Python", "OpenCV", "RT-DETR", "ONNX Runtime"],
          role: "Rol principal: Desarrollador de soluciones IA",
          highlights: [
            "Implementé un pipeline multihilo que redujo la latencia de video en 35%.",
            "Ajusté modelos RT-DETR sobre ONNX Runtime para alcanzar una precisión del 92%."
          ],
          links: []
        },
        {
          id: "control-riego-iot",
          name: "Aplicación Móvil + IoT para Control de Riego",
          description: "Sistema inteligente de riego que integra una app móvil y un microcontrolador ESP32 para automatizar ciclos de riego.",
          stack: ["Kotlin", "ESP32", "REST APIs", "IoT"],
          role: "Rol principal: Desarrollador de aplicaciones IoT",
          highlights: [
            "Sincronicé la comunicación nube-dispositivo para mantener la disponibilidad por encima del 99%.",
            "Configuré ciclos automatizados que redujeron el consumo de agua estimado en 20%."
          ],
          links: []
        },
        {
          id: "generador-videos-ia",
          name: "Generador de Videos Cortos con IA",
          description: "Herramienta que combina imágenes generadas con IA y narraciones sintetizadas para crear videos cortos automatizados.",
          stack: ["Python", "MoviePy", "Stable Diffusion", "TTS"],
          role: "Rol principal: Desarrollador full stack de IA",
          highlights: [
            "Diseñé un pipeline multihilo que acortó el tiempo de renderizado por video de 6 a 2 minutos.",
            "Integré generación de guion, imagen y voz para automatizar el 100% del flujo creativo."
          ],
          links: []
        }
      ],
      journey: [
        {
          title: "Prácticas en Ingeniería de Sistemas - SIECORP",
          description: "Participé en el desarrollo de aplicaciones IoT y visión por computadora para control de riego y analítica vehicular en tiempo real."
        },
        {
          title: "Estudiante ISC - IPN ESCOM",
          description: "Curso la Ingeniería en Sistemas Computacionales con egreso programado para Jul 2026, profundizando en IA, IoT, redes y optimización de software."
        },
        {
          title: "Proyectos personales de IA y backend",
          description: "He construido soluciones con tecnologías web y Python que integran modelos de IA y dispositivos conectados."
        }
      ],
      contact: {
        email: "soriadgonzalez@gmail.com",
        phone: "+52 473 144 7367",
        message: "Me entusiasma aportar en iniciativas que combinen IA, IoT y productos digitales de próxima generación."
      },
      testimonials: [],
      cvFiles: cvFileDownloadOptions
    },
    en: {
      name: "Daniel Soria González",
      tagline: "Computer Systems Engineering Student (Graduating Jul 2026)",
      bio: "I am a computer systems engineering student focused on artificial intelligence, IoT, and computer vision. I build real-time solutions and web products using multithreaded architectures that prioritize performance and quality.",
      location: "Mexico City, Mexico",
      availability: "Open to internships and high-impact projects",
      socials: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/danielsoglz" },
        { label: "GitHub", url: "https://github.com/soriadg" },
        { label: "Email", url: "mailto:soriadgonzalez@gmail.com" }
      ],
      skills: [
        {
          title: "Languages & Frameworks",
          items: ["React", "Node.js", "Python", "C++", "Java", "Kotlin", "JavaScript", "HTML/CSS"]
        },
        {
          title: "Focus Areas",
          items: ["Computer Vision", "IoT", "Artificial Intelligence", "Real-time Processing"]
        },
        {
          title: "Tools & Platforms",
          items: ["MySQL", "REST APIs", "Git", "Linux", "Windows"]
        }
      ],
      projects: [
        {
          id: "contador-clasificador-vehiculos",
          name: "Real-time Vehicle Counter & Classifier",
          description: "AI-powered system that detects, counts, and classifies vehicles in real time.",
          stack: ["Python", "OpenCV", "RT-DETR", "ONNX Runtime"],
          role: "Role: AI solutions developer",
          highlights: [
            "Implemented a multithreaded pipeline that cut video latency by 35%.",
            "Fine-tuned RT-DETR models on ONNX Runtime to reach 92% accuracy."
          ],
          links: []
        },
        {
          id: "control-riego-iot",
          name: "Smart Irrigation App + IoT",
          description: "Intelligent irrigation platform combining a mobile app and an ESP32 controller for automated watering cycles.",
          stack: ["Kotlin", "ESP32", "REST APIs", "IoT"],
          role: "Role: IoT applications developer",
          highlights: [
            "Synchronized cloud-to-device communication to keep availability above 99%.",
            "Automated watering schedules that lowered estimated water usage by 20%."
          ],
          links: []
        },
        {
          id: "generador-videos-ia",
          name: "AI Short-Video Generator",
          description: "Tool that assembles AI-generated visuals and narrated scripts to create short automated videos.",
          stack: ["Python", "MoviePy", "Stable Diffusion", "TTS"],
          role: "Role: Full-stack AI developer",
          highlights: [
            "Designed a multithreaded pipeline that reduced render time per video from 6 to 2 minutes.",
            "Integrated script, image, and voice generation to automate 100% of the creative workflow."
          ],
          links: []
        }
      ],
      journey: [
        {
          title: "Systems Engineering Internship - SIECORP",
          description: "Worked on IoT applications and computer vision analytics for irrigation control and real-time vehicle insights."
        },
        {
          title: "Computer Systems Engineering Student - IPN ESCOM",
          description: "Pursuing my degree with graduation planned for Jul 2026, focusing on AI, IoT, networking, and software optimization."
        },
        {
          title: "Personal AI & Backend Projects",
          description: "Built web and Python-based solutions that combine AI models with connected devices."
        }
      ],
      contact: {
        email: "soriadgonzalez@gmail.com",
        phone: "+52 473 144 7367",
        message: "Excited to contribute to initiatives that blend AI, IoT, and next-generation digital products."
      },
      testimonials: [],
      cvFiles: cvFileDownloadOptions
    }
  }
};

module.exports = { cvData };
