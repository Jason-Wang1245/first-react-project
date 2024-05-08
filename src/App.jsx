import { useState } from "react";

import ProjectsList from "./components/ProjectsList";
import AddProject from "./components/AddProject";
import NoProject from "./components/NoProject";
import Project from "./components/Project";

function App() {
  const [projects, setProjects] = useState([
    {
      title: "Test Project",
      description: "A test project",
      tasks: ["task 1", "task 2", "task 3"],
      date: "2024-05-08",
    },
    {
      title: "Test Project 2",
      description: "A test project",
      tasks: ["task 1", "task 2", "task 3"],
      date: "2024-05-08",
    },
  ]);
  const [noProject, setNoProject] = useState(true);
  const [curProject, setCurProject] = useState(null);

  // update right page stauts to create new project
  function updateCreateNewProject() {
    setNoProject(false);
    setCurProject(null);
  }
  // update right page status to no project selected
  function updateNoProject() {
    setNoProject(true);
    setCurProject(null);
  }
  // add new project object to projects array
  function addProject(newTitle, newDescription, newDate) {
    setProjects((prevProjects) => {
      return [
        {
          title: newTitle,
          description: newDescription,
          date: newDate,
          tasks: [],
        },
        ...prevProjects,
      ];
    });
  }
  // update right page status to selected page
  function updateCurProject(project) {
    setCurProject(project);
    setNoProject(false);
  }
  // delete a project
  function deleteProject(projectTitle) {
    setProjects((prevProjects) => {
      // const newProjects = [...prevProjects];
      // const removeProject = prevProjects.find(
      //   (project) => (project.title = projectTitle),
      // );
      // newProjects.splice(removeProject);
      // return newProjects;
      const newProjects = prevProjects.filter(
        (project) => project.title != projectTitle,
      );
      return newProjects;
    });

    updateNoProject();
  }
  // delete task from a project
  function deleteTask(projectTitle, taskName) {
    setProjects((prevProjects) => {
      const newProjects = prevProjects.map((project) => {
        if (project.title != projectTitle) return project;
        else {
          const newTasks = project.tasks.filter((task) => task != taskName);
          return {
            ...project,
            tasks: newTasks,
          };
        }
      });

      return newProjects;
    });
  }
  // add task to project
  function addTask(projectTitle, taskName) {
    setProjects((prevProjects) => {
      const newProjects = prevProjects.map((project) => {
        if (project.title != projectTitle) return project;
        else {
          const newTasks = [...project.tasks, taskName];
          return {
            ...project,
            tasks: newTasks,
          };
        }
      });

      return newProjects;
    });
  }

  return (
    <div className="flex">
      <ProjectsList
        projects={projects}
        onCreateProject={updateCreateNewProject}
        selectedProject={curProject}
        onSetProject={updateCurProject}
      />
      {noProject && <NoProject onCreateProject={updateCreateNewProject} />}
      {!noProject && curProject === null && (
        <AddProject onCancel={updateNoProject} onAdd={addProject} />
      )}
      {!noProject && curProject && (
        <Project
          projectData={projects.find((project) => project.title === curProject)}
          onDelete={deleteProject}
          onDeleteTask={deleteTask}
          onAddTask={addTask}
        />
      )}
    </div>
  );
}

export default App;
