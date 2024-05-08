import { useState } from "react";

import ProjectsList from "./components/ProjectsList";
import AddProject from "./components/AddProject";
import NoProject from "./components/NoProject";

function App() {
  const [projects, setProjects] = useState([
    {
      title: "Test Project",
      Description: "A test project",
      tasks: ["task 1", "task 2", "task 3"],
    },
  ]);
  const [noProject, setNoProject] = useState(true);
  const [curProject, setCurProject] = useState(null);

  return (
    <div className="flex">
      <ProjectsList projects={projects} />
      {noProject && <NoProject />}
      {!noProject && <AddProject />}
    </div>
  );
}

export default App;
