import { useFetchNotes } from "@/services/notes/notes.services.hook";
import { NoteListProps } from "./NoteList.types";
import NoteCard from "../NoteCard/NoteCard";
import NoteInput from "../NoteInput/NoteInput";
import { sortNotes } from "./NoteList.helpers";
import { useMemo } from "react";
import { NoteListPlaceholder } from "./NoteList.placeholder";
import { EmptyNoteListPlaceholder } from "./NoteList.placeholder";

const NoteList: React.FC<NoteListProps> = () => {
  const { data: notes, isLoading } = useFetchNotes();

  const hasNotes = !!notes?.length;

  const sortedNotesMemo = useMemo(() => {
    return sortNotes(notes);
  }, [notes]);

  const renderNotesNode = hasNotes ? (
    sortedNotesMemo?.map((note) => <NoteCard key={note.id} note={note} />)
  ) : (
    <EmptyNoteListPlaceholder />
  );

  return (
    <>
      <NoteInput />
      <div className="flex flex-col space-y-4 overflow-scroll px-4 mt-4 pb-10">
        {isLoading ? <NoteListPlaceholder /> : renderNotesNode}
      </div>
    </>
  );
};

export default NoteList;
