import { ChartLineMultiple } from "@/components/chart-line-multiple";
import { ChartBarMultiple } from "@/components/multiple-chart";
import { ChartPieLabel } from "@/components/pie-chart";

export default function Home() {
  return (
    <div className="flex justify-between gap-14 flex-wrap">
      <ChartBarMultiple />
      <ChartPieLabel />
      <ChartLineMultiple />
    </div>
  );
}
