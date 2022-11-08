import Link from "next/link";
import PageContent from "../../common/PageContent";
import tokens from "@productplan/atlas-tokens/dist/js/tokens.json";
import ColorTokens from "../../common/DesignTokens/ColorTokens";
import DesignTokensNavigation from "../../common/DesignTokens/DesignTokensNavigation";

export default function Tokens() {
  const colors = tokens.color;

  return (
    <PageContent
      title="Design Tokens: Colors"
      subtitle="Design Tokens for Atlas."
    >
      <DesignTokensNavigation />

      <ColorTokens colors={colors} />
    </PageContent>
  );
}
