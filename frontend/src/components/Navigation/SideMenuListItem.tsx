import React from "react";

type Props = {
  item: string;
  href?: string;
};

export function SideMenuListItem(props: Props) {
  return (
    <li className="p-3 fs-4 text-dark">
      <a href={`/${props.href}`} className="text-dark text-decoration-none">{props.item}</a>
    </li>
  );
}
