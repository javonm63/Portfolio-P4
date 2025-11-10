const ProgressBar = ({ label, value, color}) => {
  return (
    <div style={styles.container}>
      <div style={styles.labelRow}>
        <span style={styles.label}>{label}</span>
        <span style={styles.percent}>{value}%</span>
      </div>
      <div style={styles.bar}>
        <div
          style={{
            ...styles.fill,
            width: `${value}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    marginBottom: "1rem",
  },
  labelRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.3rem",
    fontSize: "0.9rem",
    fontWeight: "500",
  },
  label: { color: "#aaa" },
  percent: { color: "#aaa" },
  bar: {
    width: "100%",
    height: "30px",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: "8px",
    transition: "width 0.5s ease-in-out",
  },
};

export default ProgressBar;