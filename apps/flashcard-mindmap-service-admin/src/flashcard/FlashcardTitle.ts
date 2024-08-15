import { Flashcard as TFlashcard } from "../api/flashcard/Flashcard";

export const FLASHCARD_TITLE_FIELD = "title";

export const FlashcardTitle = (record: TFlashcard): string => {
  return record.title?.toString() || String(record.id);
};
