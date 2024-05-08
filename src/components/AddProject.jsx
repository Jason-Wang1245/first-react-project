import { useRef } from "react";

import Button from "./Button";

export default function AddProject({ onCancel, onAdd }) {
  const titleInput = useRef();
  const descriptionInput = useRef();
  const dateInput = useRef();

  return (
    <section className="flex-initial w-full m-4">
      <div className="flex justify-end">
        <Button
          text="Cancel"
          className="px-4 py-2 rounded text-black"
          onClick={onCancel}
        />
        <Button
          text="Save"
          className="px-4 py-2 rounded bg-gray-950 text-white"
          onClick={() => {
            onAdd(
              titleInput.current.value,
              descriptionInput.current.value,
              dateInput.current.value,
            );
            onCancel();
          }}
        />
      </div>
      <div className="my-4">
        <h3 className="font-semibold uppercase text-sm mb-1">Title</h3>
        <input type="text" className="w-full" ref={titleInput} required />
      </div>
      <div className="my-4">
        <h3 className="font-semibold uppercase text-sm mb-1">Description</h3>
        <textarea className="w-full" ref={descriptionInput} required />
      </div>
      <div className="my-4">
        <h3 className="font-semibold uppercase text-sm mb-1">Due Date</h3>
        <input type="date" className="w-full" ref={dateInput} required />
      </div>
    </section>
  );
}
