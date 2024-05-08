import icon from "../assets/no-projects.png";

import Button from "./Button";

export default function NoProject() {
  return (
    <section className="flex-initial w-full m-4 items-center">
      <img src={icon} className="w-16 h-16 mx-auto" />
      <h2 className="font-bold mb-1 text-center text-gray-600">
        No Project Selected
      </h2>
      <p className="font-light text-center text-gray-500">
        Select a project or get started with a new one
      </p>
    </section>
  );
}
