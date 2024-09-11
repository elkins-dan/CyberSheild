import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MachineLearningModelEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="accuracy" source="accuracy" />
        <TextInput label="modelName" source="modelName" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
