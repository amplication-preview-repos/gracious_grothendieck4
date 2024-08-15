import { InputJsonValue } from "../../types";
import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type MindMapUpdateInput = {
  nodes?: InputJsonValue;
  pdf?: PdfWhereUniqueInput | null;
  title?: string | null;
};
