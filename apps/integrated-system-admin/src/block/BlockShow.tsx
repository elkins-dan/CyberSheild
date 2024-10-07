import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BLOCK_TITLE_FIELD } from "./BlockTitle";

export const BlockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BlockHash" source="blockHash" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Nonce" source="nonce" />
        <TextField label="PreviousBlockHash" source="previousBlockHash" />
        <TextField label="Timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Transaction"
          target="blockId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Block" source="block.id" reference="Block">
              <TextField source={BLOCK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="FromAddress" source="fromAddress" />
            <TextField label="ID" source="id" />
            <TextField label="Timestamp" source="timestamp" />
            <TextField label="ToAddress" source="toAddress" />
            <TextField label="TransactionHash" source="transactionHash" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
