import styles from "./DesignTokens.module.scss";
import DesignTokenValueInput from "./DesignTokenValueInput";

const ColorTokens = ({ colors }) => {
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
                <td>
                  <div
                    style={{
                      backgroundColor: `var(--a-color-${color}-${shade})`,
                      width: 100,
                      height: 40,
                      borderRadius: 4,
                      border: 1,
                      borderColor: "var(--a-color-light-gray-300)",
                      borderStyle: "solid",
                    }}
                  />
                </td>
                <td>
                  <code>{colors[color][shade].value.toUpperCase()}</code>
                </td>
                <td>
                  <code>{colors[color][shade].name}</code>
                </td>
                <td>
                  <DesignTokenValueInput
                    value={`--a-color-${color}-${shade}`}
                  />
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

export default ColorTokens;
