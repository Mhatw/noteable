import React, { useRef, useState } from "react";
import { NoteInputProps } from "./NoteInput.types";
import Button from "../Button/Button";
import { useCreateNote } from "@/services/notes/notes.services.hook";

const NoteInput: React.FC<NoteInputProps> = () => {
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [description, setDescription] = useState("");
  const { mutateAsync: createNote } = useCreateNote();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCreateNote = async () => {
    if (!description) return;
    try {
      setLoading(true);
      await createNote({
        description,
      });
      setDescription("");
    } finally {
      setLoading(false);
      setIsFocused(false);
    }
  };

  return (
    <>
      <div className="border-2 border-note-gray2 p-4 rounded-2xl select-none mb-4">
        <textarea
          ref={textareaRef}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Something to remember..."
          rows={isFocused ? 4 : 1}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required
          className="text-2xl w-full resize-none outline-none bg-note-gray6"
        />
      </div>
      <Button
        buttonRef={buttonRef}
        onClick={handleCreateNote}
        size="xs"
        className="rounded-xl text-lg"
        variant="github"
        disabled={!description}
        isLoading={loading}
      >
        Create
      </Button>
    </>
  );
};

export default NoteInput;
