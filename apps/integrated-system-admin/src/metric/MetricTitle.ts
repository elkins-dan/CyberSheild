import { Metric as TMetric } from "../api/metric/Metric";

export const METRIC_TITLE_FIELD = "id";

export const MetricTitle = (record: TMetric): string => {
  return record.id?.toString() || String(record.id);
};
