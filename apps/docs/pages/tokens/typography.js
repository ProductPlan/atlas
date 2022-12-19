import Link from "next/link";
import PageContent from "../../common/PageContent";
import tokens from "@productplan/atlas-tokens/dist/js/tokens.json";
import TypographyTokens from "../../common/DesignTokens/TypographyTokens";
import DesignTokensNavigation from "../../common/DesignTokens/DesignTokensNavigation";

export default function Typography() {
  const fontFamilies = tokens["font-family"];

  return (
    <PageContent
      title="Design Tokens: Typography"
      subtitle="Design Tokens for Atlas."
    >
      <DesignTokensNavigation />

      <TypographyTokens
        fontFamilies={fontFamilies}
      />

    </PageContent>
  );
}
