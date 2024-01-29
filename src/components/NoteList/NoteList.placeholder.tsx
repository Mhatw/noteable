export const NoteListPlaceholder = () => {
  const cardNoteNode = (
    <div className="h-40 bg-note-gray4 animate-pulse p-4 rounded-2xl select-none" />
  );
  return (
    <>
      {cardNoteNode}
      {cardNoteNode}
      {cardNoteNode}
    </>
  );
};

export const EmptyNoteListPlaceholder = () => {
  return (
    <div className="mt-4 px-4">
      <div className=" h-40 border-2 border- border-black border-dashed p-4 rounded-2xl select-none mb-4 flex justify-center items-center">
        <p className="text-2xl text-black">No notes yet :(</p>
      </div>
    </div>
  );
};
