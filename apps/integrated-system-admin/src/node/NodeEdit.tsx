import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const NodeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="IpAddress" source="ipAddress" />
        <TextInput label="NodeId" source="nodeId" />
        <NumberInput step={1} label="Port" source="port" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
