import { useEffect } from "react";
import PropTypes from "prop-types";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";

export default function CodeExample(props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className="language-jsx">{props.children}</code>
    </pre>
  );
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired,
};
