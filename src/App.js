import "./App.scss";
import { About, Contact, Header, Projects } from "./components";
import { about } from "./content/about-me";
import { projects } from "./content/projects";

function App() {
  return (
    <div className="container">
      <Header />
      <About about={about} />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}

export default App;
