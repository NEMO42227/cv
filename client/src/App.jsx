import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import NavigationBar from "./components/NavigationBar.jsx";
import Hero from "./components/Hero.jsx";
import ProjectShowcase from "./components/ProjectShowcase.jsx";
import JourneyTimeline from "./components/JourneyTimeline.jsx";
import TestimonialCarousel from "./components/TestimonialCarousel.jsx";
import ContactPanel from "./components/ContactPanel.jsx";
import Footer from "./components/Footer.jsx";
import LoadingScene from "./components/LoadingScene.jsx";
import ErrorState from "./components/ErrorState.jsx";
import { fallbackCvData } from "./data/fallback.js";
import "./styles/components.scss";

const App = () => {
  const [cvState, setCvState] = useState({ data: fallbackCvData, source: "fallback" });
  const [status, setStatus] = useState("loading");
  const [language, setLanguage] = useState(fallbackCvData.defaultLanguage || "es");
  const [errorKey, setErrorKey] = useState(null);

  const getAvailableLanguages = (data) => Object.keys(data.languages || {});

  const selectLanguage = (data, lang) => {
    if (!data.languages) {
      return null;
    }
    if (data.languages[lang]) {
      return data.languages[lang];
    }
    const fallbackLang = data.defaultLanguage || getAvailableLanguages(data)[0];
    return data.languages[fallbackLang];
  };

  const currentProfile = useMemo(
    () => selectLanguage(cvState.data, language),
    [cvState.data, language]
  );

  const availableLanguages = useMemo(
    () => getAvailableLanguages(cvState.data),
    [cvState.data]
  );

  const handleLanguageToggle = () => {
    if (availableLanguages.length < 2) {
      return;
    }
    const index = availableLanguages.indexOf(language);
    const nextIndex = (index + 1) % availableLanguages.length;
    setLanguage(availableLanguages[nextIndex]);
  };

  const fetchCvData = async () => {
    setStatus("loading");
    try {
      const response = await axios.get("/api/cv");
      setCvState({ data: response.data, source: "api" });
      setErrorKey(null);
      setLanguage((prev) => {
        const langs = getAvailableLanguages(response.data);
        if (langs.includes(prev)) {
          return prev;
        }
        return response.data.defaultLanguage || langs[0] || "es";
      });
    } catch (err) {
      console.error("Error al cargar CV:", err.message);
      setCvState({ data: fallbackCvData, source: "fallback" });
      setErrorKey("api_offline");
      setLanguage((prev) => {
        const langs = getAvailableLanguages(fallbackCvData);
        if (langs.includes(prev)) {
          return prev;
        }
        return fallbackCvData.defaultLanguage || langs[0] || "es";
      });
    } finally {
      setStatus("ready");
    }
  };

  useEffect(() => {
    fetchCvData();
  }, []);

  const resolveErrorMessage = () => {
    if (!errorKey) {
      return null;
    }
    const messages = {
      api_offline: {
        es: "No pudimos conectar con tu backend. Estamos usando la versión offline.",
        en: "We couldn't reach your backend. You're seeing the offline version for now."
      }
    };
    const catalog = messages[errorKey];
    if (!catalog) {
      return null;
    }
    return catalog[language] || catalog.es;
  };

  if (status === "loading" || !currentProfile) {
    return <LoadingScene />;
  }

  const errorMessage = resolveErrorMessage();

  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="container" style={{ marginTop: "2rem" }}>
          <NavigationBar
            name={currentProfile.name}
            socials={currentProfile.socials}
            availability={currentProfile.availability}
            language={language}
            onToggleLanguage={handleLanguageToggle}
            canToggleLanguage={availableLanguages.length > 1}
            cvFiles={currentProfile.cvFiles}
          />
        </div>

        {errorMessage && (
          <div className="container" style={{ marginTop: "1.5rem" }}>
            <ErrorState
              onRetry={fetchCvData}
              compact
              message={errorMessage}
              language={language}
            />
          </div>
        )}

        <Hero cvData={currentProfile} language={language} />
        <ProjectShowcase projects={currentProfile.projects} language={language} />
        <JourneyTimeline journey={currentProfile.journey} language={language} />
        {Array.isArray(currentProfile.testimonials) && currentProfile.testimonials.length > 0 && (
          <TestimonialCarousel testimonials={currentProfile.testimonials} language={language} />
        )}
        <ContactPanel contact={currentProfile.contact} language={language} />
        <Footer name={currentProfile.name} socials={currentProfile.socials} language={language} />
      </div>

      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(circle at 20% 20%, rgba(154,124,255,0.08), transparent 45%), radial-gradient(circle at 80% 20%, rgba(255,144,232,0.1), transparent 35%), radial-gradient(circle at 50% 80%, rgba(84,167,255,0.08), transparent 45%)",
          zIndex: 0
        }}
      />
    </>
  );
};

export default App;
