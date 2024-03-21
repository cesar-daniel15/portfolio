import Technologies from "./Technologies";
import About from "./About";
import Projects from "./Projects";

import "../styles/components/maincontent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Technologies />
      <Projects />
    </main>
  );
};

export default MainContent;