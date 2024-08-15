import { MindMap as TMindMap } from "../api/mindMap/MindMap";

export const MINDMAP_TITLE_FIELD = "title";

export const MindMapTitle = (record: TMindMap): string => {
  return record.title?.toString() || String(record.id);
};
