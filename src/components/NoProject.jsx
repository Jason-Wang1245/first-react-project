import icon from "../assets/no-projects.png";

import Button from "./Button";

export default function NoProject({ onCreateProject }) {
  return (
    <section className="flex-initial w-full m-4 items-center mt-24">
      <img src={icon} className="w-16 h-16 mx-auto" />
      <h2 className="font-bold mb-1 text-center text-gray-600">
        No Project Selected
      </h2>
      <p className="font-light text-center text-gray-500">
        Select a project or get started with a new one
      </p>
      <p className="text-center">
        <Button
          text="Create new project"
          className="px-4 py-2 rounded bg-gray-800 text-gray-300 my-8 hover:bg-black"
          onClick={onCreateProject}
        />
      </p>
    </section>
  );
}
