import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type SummaryUpdateInput = {
  content?: string | null;
  pdf?: PdfWhereUniqueInput | null;
};
