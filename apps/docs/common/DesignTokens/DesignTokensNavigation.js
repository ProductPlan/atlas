import Link from "next/link";
import { BasicButton } from "@productplan/atlas";

const DesignTokensNavigation = () => {
  return (
    <div>
      <Link href="/tokens">
        <BasicButton label="Colors" type="secondary" />
      </Link>

      <Link href="/tokens/fonts">
        <BasicButton label="Fonts" type="secondary" />
      </Link>

      <Link href="/tokens/spacers">
        <BasicButton label="Spacers" type="secondary" />
      </Link>
    </div>
  );
};

export default DesignTokensNavigation;
