import "./App.css";
import { About, Contact, Header, Projects } from "./components";
import { about } from "./content/about-me";

function App() {
  return (
    <div className="container">
      <Header />
      <About about={about} />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
