import { useState } from "react";
import PropTypes from "prop-types";
import CodeExample from "./CodeExample";
import { IconButton } from "@productplan/atlas";

import styles from "./ComponentPage.module.scss";

export default function Example(props) {
  const [showCode, setShowCode] = useState(false);

  const toggleCode = (event) => {
    event.preventDefault();
    setShowCode((prevState) => !prevState);
  };

  const { code, description, name } = props.example;
  const ExampleComponent =
    require(`../examples/${props.componentName}/${name}`).default;

  return (
    <div className={styles.Example}>
      <header className={styles.ExampleHeader}>
        <div>{description && <h4>{description}</h4>}</div>
        <div>
          {description.toLowerCase().includes("static") ? null : (
            <IconButton
              htmlType="button"
              onClick={toggleCode}
              faClass="fa-code"
              isActive={showCode}
            />
          )}
        </div>
      </header>

      <ExampleComponent />

      {showCode && <CodeExample>{code}</CodeExample>}
    </div>
  );
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired,
};
