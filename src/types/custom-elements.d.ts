import type { DetailedHTMLProps, HTMLAttributes, Ref } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "pinecoene-locket": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { ref?: Ref<HTMLElement>; seed?: string };
    }
  }
}
