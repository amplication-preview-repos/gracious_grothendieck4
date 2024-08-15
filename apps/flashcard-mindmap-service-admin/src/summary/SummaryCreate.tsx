import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PdfTitle } from "../pdf/PdfTitle";

export const SummaryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="pdf.id" reference="Pdf" label="pdf">
          <SelectInput optionText={PdfTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
