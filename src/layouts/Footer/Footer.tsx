import { Logo } from "@/components/svg";
import { ROUTES } from "@/consts";
import Link from "next/link";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div>
      <Link href={ROUTES.HOME.href}>
        <Logo />
      </Link>
    </div>
  );
};
