import Link from "next/link";
import PageContent from "../common/PageContent";
import tokens from "@productplan/atlas-tokens/dist/js/tokens.json";
import Colors from "../common/DesignTokens/Colors";

export default function Tokens() {
  const colors = tokens.color;

  return (
    <PageContent
      title="Design Tokens"
      subtitle="Design Tokens for Atlas."
    >
      <Colors colors={colors} />
    </PageContent>
  );
}
