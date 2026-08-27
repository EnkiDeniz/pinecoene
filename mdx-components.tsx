import type { MDXComponents } from "mdx/types";
import { PublicLink } from "@/components/public/PublicLink";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: PublicLink,
    ...components,
  };
}
