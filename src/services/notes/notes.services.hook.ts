import { useMutation, useQuery } from "@tanstack/react-query";
import { createNote, deleteNote, editNote, fetchNotes } from "./notes.services";
import { CreateNotePayload, EditNoteResponse } from "./notes.services.types";
import { DeleteNotePayload, EditNotePayload } from "./notes.services.types";
import { CreateNoteResponse } from "./notes.services.types";
import { defaultErrorMessage } from "@/utils/service.utils";
import { queryClient } from "../../config/reactQuery.config";

export const useFetchNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
    enabled: true,
  });
};

export const useCreateNote = () => {
  return useMutation<CreateNoteResponse["data"], Error, CreateNotePayload>({
    mutationFn: (payload) => createNote(payload),
    onError(error) {
      defaultErrorMessage(error.message);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });
};

export const useEditNote = () => {
  return useMutation<EditNoteResponse["data"], Error, EditNotePayload>({
    mutationFn: (payload) => editNote(payload),
    onError(error) {
      defaultErrorMessage(error.message);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });
};

export const useDeleteNote = () => {
  return useMutation<void, Error, DeleteNotePayload>({
    mutationFn: (payload) => deleteNote(payload),
    onError(error) {
      defaultErrorMessage(error.message);
    },
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });
};
