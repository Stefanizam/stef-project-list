import { useState } from 'react';
import './App.css';
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { ProjectsComponent } from "./components/ProjectsComponent/ProjectsComponent";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div id="page-wrapper">
      <header id="page-header">
        <NavigationBar onSearch={(value) => setSearchValue(value)}/>
      </header>
      <div id="main-wrapper">
        <ProjectsComponent searchValue={searchValue} />
      </div>
    </div>
  );
}

export default App;
