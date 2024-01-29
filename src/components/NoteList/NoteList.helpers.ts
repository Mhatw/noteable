import { Note } from "@/services/notes/notes.services.types";

export const sortNotes = (notes?: Note[]) => {
  const sorted = notes?.sort((a, b) => +b.id - +a.id);
  return sorted;
};
