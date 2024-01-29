import React, { useRef, useState } from "react";
import { NoteCardProps } from "./NoteCard.types";
import Button from "../Button/Button";
import { useEditNote } from "@/services/notes/notes.services.hook";
import { useDeleteNote } from "@/services/notes/notes.services.hook";

const NoteCard: React.FC<NoteCardProps> = (props) => {
  const { note } = props;
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { mutateAsync: deleteNote } = useDeleteNote();
  const { mutateAsync: editNote } = useEditNote();
  const { description, id, created_at } = note;
  const [descriptionValue, setDescriptionValue] = useState(description);

  const disabledUpdateButton =
    isEditing && (!descriptionValue || descriptionValue === description);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteNote({ id });
    } finally {
      setLoading(false);
    }
  };

  const handleEditState = async () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      setDescriptionValue(description);
    }
  };

  const handleEdit = async () => {
    if (!isEditing) return;
    if (!descriptionValue) {
      textareaRef.current?.focus();
      return;
    }
    try {
      setLoading(true);
      await editNote({
        id,
        description: descriptionValue,
      });
    } finally {
      setLoading(false);
      setIsEditing(false);
    }
  };

  return (
    <div className="border-2 border-note-gray2 p-4 rounded-2xl select-none relative">
      <textarea
        className="mb-4 text-2xl w-full resize-none outline-none bg-note-gray6"
        ref={textareaRef}
        disabled={!isEditing}
        rows={isEditing ? 4 : 2}
        value={descriptionValue}
        onChange={(e) => setDescriptionValue(e.target.value)}
      />
      <div className="flex justify-end">
        <Button
          onClick={handleEditState}
          size="xs"
          className="rounded-2xl text-lg mr-2"
          variant="secondary"
          isLoading={loading}
        >
          {isEditing ? "Discard" : "Edit"}
        </Button>
        <Button
          onClick={isEditing ? handleEdit : handleDelete}
          size="xs"
          className="rounded-2xl text-lg"
          variant={isEditing ? "primary" : "danger"}
          disabled={disabledUpdateButton}
          isLoading={loading}
        >
          {isEditing ? "Update" : "Delete"}
        </Button>
      </div>
      <span className="absolute bottom-6 left-4 text-note-gray4 text-sm">
        {new Date(created_at).toLocaleDateString()}
      </span>
    </div>
  );
};

export default NoteCard;
