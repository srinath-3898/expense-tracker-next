import styles from "./Chart.module.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = ({ dataPoints }) => {
  return (
    <div className={styles.chart}>
      {dataPoints?.map((dataPoint) => (
        <ChartBar
          key={dataPoint?.label}
          maxValue={Math.max(
            ...dataPoints.map((dataPoint) => dataPoint?.value)
          )}
          value={dataPoint?.value}
          label={dataPoint?.label}
        />
      ))}
    </div>
  );
};

export default Chart;
