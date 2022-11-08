import styles from "./DesignTokens.module.scss";

const FontTokens = ({ fontSizes, lineHeights, fontWeights }) => {
  return (
    <section>
      <h2>Fonts</h2>

      <table className={styles.DesignToken__Table}>
        <thead>
          <tr>
            <th>Font</th>
            <th>Value</th>
            <th>Name</th>
            <th>CSS Variable</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(fontSizes).map((fontSize) => (
            <tr key={`${fontSize}`}>
              <td>
                <div
                  style={{
                    fontSize: `var(--a-size-font-${fontSize})`,
                  }}
                >
                  Atlas
                </div>
              </td>
              <td><code>{fontSizes[fontSize].value}</code></td>
              <td>
                <code>{fontSizes[fontSize].name}</code>
              </td>
              <td>
                <code>{`--a-size-font-${fontSize}`}</code>
              </td>
              <td className={styles.DesignToken__CellDescription}>
                {fontSizes[fontSize].description}
              </td>
            </tr>
          ))}
          {Object.keys(fontWeights).map((fontWeight) => (
            <tr key={`${fontWeight}`}>
              <td>
                <div
                  style={{
                    fontWeight: `var(--a-font-weight-font-${fontWeight})`,
                    fontSize: "var(--a-size-font-body-24)",
                  }}
                >
                  Atlas
                </div>
              </td>
              <td><code>{fontWeights[fontWeight].value}</code></td>
              <td>
                <code>{fontWeights[fontWeight].name}</code>
              </td>
              <td>
                <code>{`--a-font-weight-font-${fontWeight}`}</code>
              </td>
              <td className={styles.DesignToken__CellDescription}>
                {fontWeights[fontWeight].description}
              </td>
            </tr>
          ))}
          {Object.keys(lineHeights).map((lineHeight) => (
            <tr key={`${lineHeight}`}>
              <td>
                <div
                  style={{
                    fontSize: `var(--a-size-font-${lineHeight})`,
                    lineHeight: `var(--a-line-height-font-${lineHeight})`,
                  }}
                >
                  Atlas
                </div>
              </td>
              <td><code>{lineHeights[lineHeight].value}</code></td>
              <td>
                <code>{lineHeights[lineHeight].name}</code>
              </td>
              <td>
                <code>{`--a-line-height-font-${lineHeight}`}</code>
              </td>
              <td className={styles.DesignToken__CellDescription}>
                {lineHeights[lineHeight].description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default FontTokens;
