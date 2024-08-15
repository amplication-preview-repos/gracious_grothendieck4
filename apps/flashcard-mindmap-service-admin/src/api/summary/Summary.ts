import { Pdf } from "../pdf/Pdf";

export type Summary = {
  content: string | null;
  createdAt: Date;
  id: string;
  pdf?: Pdf | null;
  updatedAt: Date;
};
