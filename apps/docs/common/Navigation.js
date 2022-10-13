import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Navigation.module.scss";

export default function Navigation({ components }) {
  const router = useRouter();

  const isHomePage = router.pathname === "/";
  const homepageClasses = classnames({
    [styles.Sidebar__listItem]: true,
    [styles.Sidebar__listItemActive]: isHomePage,
  });

  return (
    <nav className={styles.Sidebar}>
      <div className={styles.Sidebar__title}>Atlas</div>
      <ul className={styles.Sidebar__list}>
        <li className={homepageClasses}>
          <Link href="/">Homepage</Link>
        </li>
        <li className={styles.Sidebar__listItem}>
          <a href="https://github.com/ProductPlan/atlas-mono" target="_blank" rel="noreferrer">
            GitHub <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>

      <div className={styles.Sidebar__title}>Components</div>

      <ul className={styles.Sidebar__list}>
        {components.map((name) => {
          const elementClasses = classnames({
            [styles.Sidebar__listItem]: true,
            [styles.Sidebar__listItemActive]: router?.query.component === name,
          });

          return (
            <li className={elementClasses} key={name}>
              <Link href={`/components/${name}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired,
};
