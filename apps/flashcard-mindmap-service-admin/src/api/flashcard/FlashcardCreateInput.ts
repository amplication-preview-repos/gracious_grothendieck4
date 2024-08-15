import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type FlashcardCreateInput = {
  content?: string | null;
  pdf?: PdfWhereUniqueInput | null;
  title?: string | null;
};
