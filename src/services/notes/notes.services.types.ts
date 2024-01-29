export interface Note {
  id: string;
  created_at: string;
  description: string;
  isStarred: boolean;
  isDone: boolean;
  user_id: string;
}

export interface CreateNotePayload extends Pick<Note, "description"> {}

export interface CreateNoteResponse {
  data: Note;
}

export interface EditNotePayload extends Pick<Note, "description" | "id"> {}

export interface EditNoteResponse {
  data: Note;
}

export interface DeleteNotePayload {
  id: string;
}

export interface DeleteNoteResponse {
  data: null;
}
