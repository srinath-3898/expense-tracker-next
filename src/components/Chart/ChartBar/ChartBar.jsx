import styles from "./ChartBar.module.css";

const ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className={styles.chart_bar}>
      <div className={styles.inner}>
        <div className={styles.fill} style={{ height: barFillHeight }}></div>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default ChartBar;
