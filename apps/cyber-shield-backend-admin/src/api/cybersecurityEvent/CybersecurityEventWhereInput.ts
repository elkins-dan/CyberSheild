import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CybersecurityEventWhereInput = {
  eventSeverity?: IntNullableFilter;
  eventTimestamp?: DateTimeNullableFilter;
  eventType?: "Option1";
  id?: StringFilter;
};
