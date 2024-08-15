import { MindMapWhereInput } from "./MindMapWhereInput";
import { MindMapOrderByInput } from "./MindMapOrderByInput";

export type MindMapFindManyArgs = {
  where?: MindMapWhereInput;
  orderBy?: Array<MindMapOrderByInput>;
  skip?: number;
  take?: number;
};
