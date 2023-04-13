import styles from "./DesignTokens.module.scss";

const BorderRadiusTokens = ({ borderRadiusTokens }) => {
  return (
    <section>
      <h2>Border Radius</h2>

      <table className={styles.DesignToken__Table}>
        <thead>
          <tr>
            <th>Border Radius</th>
            <th>Value</th>
            <th>Name</th>
            <th>CSS Variable</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(borderRadiusTokens).map((borderRadius) => {
            return (
              <tr key={`${borderRadius}`}>
                <td>
                  <span
                    style={{
                      display: "inline-block",
                      width: "100px",
                      height: "50px",
                      backgroundColor: "var(--a-color-blue-200)",
                      borderRadius: `var(--a-border-radius-${borderRadius})`,
                    }}
                  >
                  </span>
                </td>
                <td><code>{borderRadiusTokens[borderRadius].value}</code></td>
                <td>
                  <code>{borderRadiusTokens[borderRadius].name}</code>
                </td>
                <td>
                  <code>{`--a-border-radius-${borderRadius}`}</code>
                </td>
                <td className={styles.DesignToken__CellDescription}>
                  {borderRadiusTokens[borderRadius].description}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default BorderRadiusTokens;
