import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { BlockTitle } from "../block/BlockTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="block.id" reference="Block" label="Block">
          <SelectInput optionText={BlockTitle} />
        </ReferenceInput>
        <TextInput label="FromAddress" source="fromAddress" />
        <DateTimeInput label="Timestamp" source="timestamp" />
        <TextInput label="ToAddress" source="toAddress" />
        <TextInput label="TransactionHash" source="transactionHash" />
        <NumberInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
