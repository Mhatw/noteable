import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { AxiosError } from "axios";
import { CreateNotePayload, Note } from "./notes.services.types";
import { DeleteNotePayload, EditNotePayload } from "./notes.services.types";
import { supabase } from "@/config/supabaseClient";

export const fetchNotes = async (): Promise<Note[]> => {
  try {
    const response: PostgrestSingleResponse<Note[]> = await supabase
      .from("notes")
      .select("*");

    if (response.error) throw response.error.message;
    return response.data;
  } catch (e) {
    const error = e as Error | AxiosError;
    throw new Error(error.message);
  }
};

export const createNote = async (payload: CreateNotePayload) => {
  try {
    const { data } = await supabase.auth.getSession();
    const { id: userId } = data.session?.user ?? {};
    if (!userId) throw "we have problems with your user id 😔";

    const newNote = { ...payload, user_id: userId };

    const response: PostgrestSingleResponse<Note> = await supabase
      .from("notes")
      .insert(newNote)
      .select()
      .single();
    if (response.error) throw response.error.message;
    return response.data;
  } catch (e) {
    const error = e as Error | AxiosError;
    throw new Error(error.message);
  }
};

export const editNote = async (payload: EditNotePayload) => {
  const { id, description } = payload;

  try {
    const { data } = await supabase.auth.getSession();
    const { id: userId } = data.session?.user ?? {};
    if (!userId) throw "we have problems with your user id 😔";

    const partialNote = { description, user_id: userId };

    const response: PostgrestSingleResponse<Note> = await supabase
      .from("notes")
      .update(partialNote)
      .match({ id })
      .select()
      .single();
    if (response.error) throw response.error.message;
    return response.data;
  } catch (e) {
    const error = e as Error | AxiosError;
    throw new Error(error.message);
  }
};

export const deleteNote = async (payload: DeleteNotePayload) => {
  const { id } = payload;
  try {
    const response: PostgrestSingleResponse<null> = await supabase
      .from("notes")
      .delete()
      .match({ id });
    if (response.error) throw response.error.message;
  } catch (e) {
    const error = e as Error | AxiosError;
    throw new Error(error.message);
  }
};
