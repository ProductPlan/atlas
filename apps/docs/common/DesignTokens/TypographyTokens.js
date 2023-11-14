import styles from "./DesignTokens.module.scss";
import DesignTokenValueInput from "./DesignTokenValueInput";

const TypographyTokens = ({ fontFamilies }) => {
  return (
    <section>
      <h2>Typography / Font Families</h2>

      <table className={styles.DesignToken__Table}>
        <thead>
          <tr>
            <th>Typography</th>
            <th>Value</th>
            <th>Name</th>
            <th>CSS Variable</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(fontFamilies).map((fontFamily) => (
            <tr key={`${fontFamily}`}>
              <td>
                <div
                  style={{
                    fontFamily: `var(--a-font-family-${fontFamily})`,
                  }}
                >
                  Atlas
                </div>
              </td>
              <td><code>{fontFamilies[fontFamily].value}</code></td>
              <td>
                <code>{fontFamilies[fontFamily].name}</code>
              </td>
              <td>
                <DesignTokenValueInput
                  value={`--a-size-font-${fontFamily}`}
                />
              </td>
              <td className={styles.DesignToken__CellDescription}>
                {fontFamilies[fontFamily].description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TypographyTokens;
