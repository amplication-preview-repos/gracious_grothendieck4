import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PdfWhereUniqueInput } from "../pdf/PdfWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MindMapWhereInput = {
  id?: StringFilter;
  nodes?: JsonFilter;
  pdf?: PdfWhereUniqueInput;
  title?: StringNullableFilter;
};
