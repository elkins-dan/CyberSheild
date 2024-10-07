import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const NodeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="IpAddress" source="ipAddress" />
        <TextInput label="NodeId" source="nodeId" />
        <NumberInput step={1} label="Port" source="port" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
