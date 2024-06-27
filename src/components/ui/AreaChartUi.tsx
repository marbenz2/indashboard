import { AreaChart } from "@tremor/react";
import { cashdata } from "../../data/data";

const valueFormatter = function (number: number) {
  return new Intl.NumberFormat("de").format(number).toString();
};

const AreaChartUi = () => {
  return (
    <>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Total Income
      </h3>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
        {/* add income from person 1 and person 2 and add up all 12 months */}
        {cashdata
          .reduce((acc, cur) => acc + cur["user 1"] + cur["user 2"], 0)
          .toLocaleString("de-DE", { style: "currency", currency: "EUR" })}
      </p>
      <AreaChart
        className="mt-4 h-72"
        data={cashdata}
        index="date"
        yAxisWidth={65}
        categories={["user 1", "user 2"]}
        colors={["indigo", "cyan"]}
        valueFormatter={valueFormatter}
      />
    </>
  );
};

export default AreaChartUi;
