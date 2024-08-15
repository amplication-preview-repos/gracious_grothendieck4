import { Pdf } from "../pdf/Pdf";

export type Question = {
  answer: string | null;
  createdAt: Date;
  id: string;
  pdf?: Pdf | null;
  question: string | null;
  updatedAt: Date;
};
