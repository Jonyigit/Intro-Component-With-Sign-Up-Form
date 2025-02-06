import { Footer } from "./components/footer-page/footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home-page/Home";
import { Project } from "./components/projects-page/project";
import { Skills } from "./components/skills-page/skills";
import "./styles/App.css";

function App() {
    return (
        <>
            <Header /> <Home /> <Skills /> <Project /> <Footer />
        </>
    );
}

export default App;
