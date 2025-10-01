import "./App.scss";
import Header from "./components/Header/Header.component";
import Hero from "./components/Hero/Hero.component";
import About from "./components/About/About.component";
import Experience from "./components/Experience/Experience.component";
import Contact from "./components/Contact/Contact.component";
import "./i18n";
import { LanguageProvider } from "./store/language/language.store";
import Menu from "./components/Menu/Menu.component";
import { ModalsProvider } from "./store/modals/modals.store";
import ScrollTop from "./components/ScrollTop/ScrollTop.component";
import MoreArrow from "./components/MoreArrow/MoreArrow.component";

function App() {
  return (
    <ModalsProvider>
      <LanguageProvider>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Contact />
        <Menu />
        <ScrollTop />
        <MoreArrow />
      </LanguageProvider>
    </ModalsProvider>
  );
}

export default App;
