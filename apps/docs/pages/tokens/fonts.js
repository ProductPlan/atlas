import Link from "next/link";
import PageContent from "../../common/PageContent";
import tokens from "@productplan/atlas-tokens/dist/js/tokens.json";
import FontTokens from "../../common/DesignTokens/FontTokens";
import DesignTokensNavigation from "../../common/DesignTokens/DesignTokensNavigation";

export default function Fonts() {
  const fontWeights = tokens["font-weight"].font;
  const fontSizes = tokens.size.font;
  const lineHeights = tokens["line-height"].font;

  return (
    <PageContent
      title="Design Tokens: Fonts"
      subtitle="Design Tokens for Atlas."
    >
      <DesignTokensNavigation />

      <FontTokens
        fontWeights={fontWeights}
        fontSizes={fontSizes}
        lineHeights={lineHeights}
      />

    </PageContent>
  );
}
