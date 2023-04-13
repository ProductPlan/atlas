import Link from "next/link";
import PageContent from "../../common/PageContent";
import tokens from "@productplan/atlas-tokens/dist/js/tokens.json";
import FontTokens from "../../common/DesignTokens/FontTokens";
import DesignTokensNavigation from "../../common/DesignTokens/DesignTokensNavigation";
import BorderRadiusTokens from "../../common/DesignTokens/BorderRadiusTokens";

export default function Shapes() {
  const borderRadiusTokens = tokens["border-radius"];

  return (
    <PageContent
      title="Design Tokens: Shapes"
      subtitle="Design Tokens for Atlas."
    >
      <DesignTokensNavigation />

      <BorderRadiusTokens borderRadiusTokens={borderRadiusTokens} />

    </PageContent>
  );
}
