import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const CybersecurityEventCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
