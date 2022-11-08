import styles from "./DesignTokens.module.scss";

const Colors = ({ colors }) => {
  return (
    <section>
      <h2>Colors</h2>

      <table className={styles.DesignToken__Table}>
        <thead>
          <tr>
            <th>Color</th>
            <th>Value</th>
            <th>Name</th>
            <th>CSS Variable</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(colors).map((color) => (
            Object.keys(colors[color]).map((shade) => (
              <tr key={`${color}-${shade}`}>
                <td>{`${color}-${shade}`}</td>
                <td>
                  <div
                    style={{
                      backgroundColor: colors[color][shade].value,
                      width: 100,
                      height: 40,
                      borderRadius: 4,
                    }}
                  />
                </td>
                <td>
                  <code>{colors[color][shade].name}</code>
                </td>
                <td>
                  <code>{`--a-color-${color}-${shade}`}</code>
                </td>
                <td className={styles.DesignToken__CellDescription}>
                  {colors[color][shade].description}
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Colors;
