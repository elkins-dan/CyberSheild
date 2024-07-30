import { CybersecurityEventWhereInput } from "./CybersecurityEventWhereInput";
import { CybersecurityEventOrderByInput } from "./CybersecurityEventOrderByInput";

export type CybersecurityEventFindManyArgs = {
  where?: CybersecurityEventWhereInput;
  orderBy?: Array<CybersecurityEventOrderByInput>;
  skip?: number;
  take?: number;
};
