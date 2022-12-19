import Link from "next/link";
import { BasicButton } from "@productplan/atlas";
import { useRouter } from "next/router";

const DesignTokensNavigation = () => {
  const router = useRouter();
  const links = [
    {
      label: "Colors",
      href: "/tokens",
    },
    {
      label: "Fonts",
      href: "/tokens/fonts",
    },
    {
      label: "Spacers",
      href: "/tokens/spacers",
    },
    {
      label: "Typography",
      href: "/tokens/typography",
    },
  ];

  return (
    <div>
      {links.map((link) => (
        <Link href={link.href} key={link.label}>
          <BasicButton
            label={link.label}
            type={router.asPath === link.href ? "default" : "secondary"}
          />
        </Link>
      ))}
    </div>
  );
};

export default DesignTokensNavigation;
