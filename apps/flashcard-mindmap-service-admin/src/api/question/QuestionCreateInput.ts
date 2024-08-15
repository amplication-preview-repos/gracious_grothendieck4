import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type QuestionCreateInput = {
  answer?: string | null;
  pdf?: PdfWhereUniqueInput | null;
  question?: string | null;
};
