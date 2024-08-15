import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type FlashcardUpdateInput = {
  content?: string | null;
  pdf?: PdfWhereUniqueInput | null;
  title?: string | null;
};
