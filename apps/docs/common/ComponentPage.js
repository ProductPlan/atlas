import PropTypes from "prop-types";
import Example from "./Example";
import Props from "./Props";
import PageContent from "./PageContent";

import styles from "./ComponentPage.module.scss";

export default function ComponentPage({ component }) {
  const { name, description, props, examples } = component;

  return (
    <PageContent title={name} subtitle={description}>
      <h3>Example{examples.length > 1 && "s"}</h3>
      {examples.length > 0
        ? examples.map((example) => (
            <Example
              key={example.code}
              example={example}
              componentName={name}
            />
          ))
        : "No examples exist."}

      <h3>Props</h3>
      {props ? <Props props={props} /> : "This component accepts no props."}
    </PageContent>
  );
}

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired,
};
