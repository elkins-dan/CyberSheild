import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlockchainDatabaseEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="chainName" source="chainName" />
        <DateTimeInput label="creationDate" source="creationDate" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
