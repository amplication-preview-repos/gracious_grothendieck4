import { InputJsonValue } from "../../types";
import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";

export type MindMapCreateInput = {
  nodes?: InputJsonValue;
  pdf?: PdfWhereUniqueInput | null;
  title?: string | null;
};
