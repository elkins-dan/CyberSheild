import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlockchainDatabaseCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="chainName" source="chainName" />
        <DateTimeInput label="creationDate" source="creationDate" />
        <div />
      </SimpleForm>
    </Create>
  );
};
