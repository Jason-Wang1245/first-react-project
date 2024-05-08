import Button from "./Button";

export default function ProjectsList({
  projects,
  onCreateProject,
  selectedProject,
  onSetProject,
}) {
  return (
    <section className="h-screen flex-none w-1/4 my-4 mr-4 rounded-r-lg bg-gray-900">
      <h2 className="font-semibold uppercase text-xl text-gray-200 m-4 mt-10">
        Your Projects
      </h2>
      <Button
        text="+ Add Project"
        className="px-4 py-2 rounded bg-gray-500 text-gray-300 my-4 ml-4"
        onClick={onCreateProject}
      />
      <ul className="ml-4 text-white">
        {projects.map((project) => {
          return (
            <li
              key={project.title}
              className={`my-1 border-4 mr-4 rounded border-gray-900 hover:bg-gray-700 hover:border-gray-700 ${selectedProject === project.title ? "bg-gray-700 border-gray-700" : ""}`}
              onClick={() => {
                onSetProject(project.title);
              }}
            >
              <button>{project.title}</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
