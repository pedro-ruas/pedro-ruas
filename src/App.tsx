import "./App.scss";
import Header from "./components/Header/Header.component";
import Hero from "./components/Hero/Hero.component";
import About from "./components/About/About.component";
import Experience from "./components/Experience/Experience.component";
import Contact from "./components/Contact/Contact.component";
import "./i18n";
import { LanguageProvider } from "./store/language.store";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </LanguageProvider>
  );
}

export default App;
