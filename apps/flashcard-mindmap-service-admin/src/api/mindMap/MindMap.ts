import { JsonValue } from "type-fest";
import { Pdf } from "../pdf/Pdf";

export type MindMap = {
  createdAt: Date;
  id: string;
  nodes: JsonValue;
  pdf?: Pdf | null;
  title: string | null;
  updatedAt: Date;
};
