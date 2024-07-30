import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MachineLearningModelCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="accuracy" source="accuracy" />
        <TextInput label="modelName" source="modelName" />
        <div />
      </SimpleForm>
    </Create>
  );
};
