import { useRef } from "react";

import Button from "./Button";

export default function Project({
  projectData,
  onDelete,
  onDeleteTask,
  onAddTask,
}) {
  const taskInput = useRef();

  return (
    <section className="flex-initial w-full m-4 mt-16">
      <Button
        text="Delete"
        className="absolute right-4"
        onClick={() => {
          onDelete(projectData.title);
        }}
      />
      <h1 className="text-3xl font-bold text-gray-700">{projectData.title}</h1>
      <p className="my-1 text-gray-400">
        {new Date(projectData.date).toDateString()}
      </p>
      <p className="my-1 text-gray-800">{projectData.description}</p>
      <hr className="h-0.5 my-4 bg-gray-300 border-0 rounded " />
      <h1 className="text-2xl font-bold text-gray-700 mb-2">Tasks</h1>
      {projectData.tasks.length === 0 && (
        <p className="my-1 text-gray-800 mb-4">
          This project does not have any tasks yet.
        </p>
      )}
      <input
        type="text"
        className="w-1/3 bg-gray-300 rounded mb-6"
        ref={taskInput}
      />
      <Button
        text="Add Task"
        className="ml-4"
        onClick={() => {
          onAddTask(projectData.title, taskInput.current.value);
        }}
      />
      <div className="block max-w p-4 bg-gray-200 rounded">
        {projectData.tasks.length != 0 && (
          <ul>
            {projectData.tasks.map((task) => (
              <li key={task} className="my-1">
                {task}
                <Button
                  text="Clear"
                  className="absolute right-8 text-red-500"
                  onClick={() => {
                    onDeleteTask(projectData.title, task);
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
