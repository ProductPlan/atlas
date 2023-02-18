import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Navigation.module.scss";

const NavigationLink = ({ href, label }) => {
  const router = useRouter();
  const { pathname } = router;

  const linkClasses = classnames({
    [styles.Sidebar__listItem]: true,
    [styles.Sidebar__listItemActive]: router.asPath === href || (router.asPath.startsWith(href) && href !== "/"),
  });

  return (
    <li className={linkClasses}>
      <Link href={href}>{label}</Link>
    </li>
  )
};

export default function Navigation({ components }) {
  const router = useRouter();
  const portedComponents = ["BasicButton", "AtlasPopover", "AtlasBanner"];

  return (
    <nav className={styles.Sidebar}>
      <div className={styles.Sidebar__title}>Atlas</div>
      <ul className={styles.Sidebar__list}>
        <NavigationLink href="/" label="Welcome" />
        <li className={styles.Sidebar__listItem}>
          <a href="https://github.com/ProductPlan/atlas-mono" target="_blank" rel="noreferrer">
            GitHub <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <NavigationLink href="/tokens" label="Tokens" />
      </ul>

      <div className={styles.Sidebar__title}>Components</div>

      <ul className={styles.Sidebar__list}>
        {components.filter(component => portedComponents.includes(component)).map((name) => {
          return (
            <NavigationLink key={name} href={`/components/${name}`} label={name} />
          );
        })}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  components: PropTypes.array.isRequired,
};
