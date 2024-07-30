import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const RoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="permissions"
          source="permissions"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="roleName" source="roleName" />
      </SimpleForm>
    </Create>
  );
};
