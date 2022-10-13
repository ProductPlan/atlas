import PropTypes from "prop-types";
import styles from "./Props.module.scss";
import classNames from "classnames";

export default function Props({ props }) {
  return (
    <table className="Table">
      <thead>
        <tr>
          <th className={styles.TableHeading}>Name</th>
          <th className={styles.TableHeading}>Description</th>
          <th className={styles.TableHeading}>Type</th>
          <th className={styles.TableHeading}>Default</th>
          <th className={styles.TableHeading}>Required</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props).map((key) => {
          return (
            <tr key={key}>
              <td className={styles.TableCell}>
                <strong>{key}</strong>
              </td>
              <td className={styles.TableCell}>{props[key].description}</td>
              <td className={styles.TableCell}>{props[key].type.name}</td>
              <td className={styles.TableCell}>
                {props[key].defaultValue && props[key].defaultValue.value}
              </td>
              <td
                className={classNames([
                  styles.TableCell,
                  styles.TableCellCenter,
                ])}
              >
                {props[key].required && <i className="fa fa-check-circle" />}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Props.propTypes = {
  props: PropTypes.object.isRequired,
};
