import './App.css';
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { ProjectsComponent } from "./components/ProjectsComponent/ProjectsComponent";

function App() {
  return (
    <div id="page-wrapper">
      <header id="page-header">
        <NavigationBar />
      </header>
      <div id="main-wrapper">
        <ProjectsComponent />
      </div>
    </div>
  );
}

export default App;
