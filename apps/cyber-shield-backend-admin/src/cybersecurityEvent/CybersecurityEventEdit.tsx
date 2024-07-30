import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const CybersecurityEventEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="eventSeverity" source="eventSeverity" />
        <DateTimeInput label="eventTimestamp" source="eventTimestamp" />
        <SelectInput
          source="eventType"
          label="eventType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
