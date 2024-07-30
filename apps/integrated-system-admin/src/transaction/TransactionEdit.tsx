import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { BlockTitle } from "../block/BlockTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
