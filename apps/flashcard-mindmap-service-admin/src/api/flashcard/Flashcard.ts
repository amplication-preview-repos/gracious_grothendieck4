import { Pdf } from "../pdf/Pdf";

export type Flashcard = {
  content: string | null;
  createdAt: Date;
  id: string;
  pdf?: Pdf | null;
  title: string | null;
  updatedAt: Date;
};
