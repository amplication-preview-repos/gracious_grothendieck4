import { Question as TQuestion } from "../api/question/Question";

export const QUESTION_TITLE_FIELD = "question";

export const QuestionTitle = (record: TQuestion): string => {
  return record.question?.toString() || String(record.id);
};
