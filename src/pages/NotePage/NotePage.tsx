import NavBar from "@/components/NavBar/NavBar";
import NoteList from "@/components/NoteList/NoteList";

const NotePage = () => {
  return (
    <main className="min-w-screen w-screen bg-note-gray6 h-max">
      <section className="max-w-full w-full sm:max-w-sm sm:w-sm flex flex-col mx-auto h-screen bg-note-gray6 px-4 sm:px-0">
        <NavBar />
        <NoteList />
      </section>
    </main>
  );
};

export default NotePage;
