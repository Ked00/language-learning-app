export interface standardButton {
  type: "text" | "outlined" | "contained";
  text: string;
  background?: string;
  className?: string;
  href?: string;
  onClick?: () => void;
}
