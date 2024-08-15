import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PdfTitle } from "../pdf/PdfTitle";

export const SummaryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="pdf.id" reference="Pdf" label="pdf">
          <SelectInput optionText={PdfTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
