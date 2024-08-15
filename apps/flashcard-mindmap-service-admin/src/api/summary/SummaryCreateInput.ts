import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type SummaryCreateInput = {
  content?: string | null;
  pdf?: PdfWhereUniqueInput | null;
};
