"use client";

import Link from "next/link";
import { useState } from "react";

const links = [["Works","/works"],["Join","/join"],["More","/more"]] as const;

export function PublicNavigation() {
  const [open,setOpen] = useState(false);
  return <><button className="publicMenuButton" type="button" aria-expanded={open} aria-controls="public-menu" onClick={() => setOpen((value) => !value)}>Menu<span aria-hidden="true" /></button><nav id="public-menu" data-open={open ? "true" : "false"} aria-label="Primary navigation">{links.map(([label,href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav></>;
}
