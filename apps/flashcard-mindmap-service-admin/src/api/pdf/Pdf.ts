import { Flashcard } from "../flashcard/Flashcard";
import { MindMap } from "../mindMap/MindMap";
import { Question } from "../question/Question";
import { Summary } from "../summary/Summary";

export type Pdf = {
  createdAt: Date;
  fileName: string | null;
  fileSize: number | null;
  fileUrl: string | null;
  flashcards?: Array<Flashcard>;
  id: string;
  mindMaps?: Array<MindMap>;
  questions?: Array<Question>;
  summaries?: Array<Summary>;
  updatedAt: Date;
};
