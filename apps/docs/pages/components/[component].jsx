import { BasicButton } from "@productplan/atlas";
import Example from "../../common/Example";
import Props from "../../common/Props";
import ComponentPage from '../../common/ComponentPage';
import componentData from "../../data/componentData";

const Component = ({ component }) => {
  const componentDataInformation = componentData.find((c) => c.name === component);

  if (!componentDataInformation) {
    return <div>Component not found</div>;
  }

  return (
    <ComponentPage component={componentDataInformation} />
  );
}

export const getStaticPaths = async () => {
  const allComponents = componentData.map(component => component.name);
  const paths = allComponents.map((component) => ({ params: { component } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { component } = params;

  return {
    props: {
      component,
    },
  };
};

export default Component;
