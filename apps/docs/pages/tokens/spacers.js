import Link from "next/link";
import PageContent from "../../common/PageContent";
import tokens from "@productplan/atlas-tokens/dist/js/tokens.json";
import SpacerTokens from "../../common/DesignTokens/SpacerTokens";
import DesignTokensNavigation from "../../common/DesignTokens/DesignTokensNavigation";

export default function Spacers() {
  const spacers = tokens.spacers;

  return (
    <PageContent
      title="Design Tokens: Spacers"
      subtitle="Design Tokens for Atlas."
    >
      <DesignTokensNavigation />

      <SpacerTokens spacers={spacers} />
    </PageContent>
  );
}
