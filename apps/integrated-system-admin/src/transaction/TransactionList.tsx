import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BLOCK_TITLE_FIELD } from "../block/BlockTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
