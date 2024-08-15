import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type QuestionUpdateInput = {
  answer?: string | null;
  pdf?: PdfWhereUniqueInput | null;
  question?: string | null;
};
