import styles from "./DesignTokens.module.scss";

const SpacerTokens = ({ spacers }) => {
  return (
    <section>
      <h2>Spacers</h2>

      <table className={styles.DesignToken__Table}>
        <thead>
          <tr>
            <th>Spacer</th>
            <th>Value</th>
            <th>Name</th>
            <th>CSS Variable</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(spacers).map((spacer) => (
            <tr key={`${spacer}`}>
              <td>
                <div
                  style={{
                    backgroundColor: `var(--a-color-blue-200)`,
                    width: `var(--a-spacers-${spacer})`,
                    height: `var(--a-spacers-${spacer})`,
                  }}
                />
              </td>
              <td><code>{spacers[spacer].value}</code></td>
              <td>
                <code>{spacers[spacer].name}</code>
              </td>
              <td>
                <code>{`--a-spacers-${spacer}`}</code>
              </td>
              <td className={styles.DesignToken__CellDescription}>
                {spacers[spacer].description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SpacerTokens;
