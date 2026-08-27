import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

export function PublicLink({ href = "", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href.startsWith("http")) return <a href={href} rel="noreferrer" {...props}>{children}</a>;
  return <Link href={href} prefetch={false} {...props}>{children}</Link>;
}
