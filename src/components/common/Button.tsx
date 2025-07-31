/** @jsxImportSource theme-ui */

import type { ThemeUICSSProperties } from "theme-ui";

type ButtonProps = {
  text: string;
  styles?: ThemeUICSSProperties
};

export const Button = ({ text, styles }: ButtonProps) => {
  return <button sx={{
    padding: "7px 20px",
    border: "1px solid #000",
    borderRadius: "3px",
    backgroundColor: "inherit",
    ...styles,
  }}>{text}</button>;
};
