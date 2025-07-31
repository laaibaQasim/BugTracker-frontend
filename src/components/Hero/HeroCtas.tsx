/** @jsxImportSource theme-ui */
import { Button } from "../common/Button";

export const HeroCtas = () => {
  return (
  <div
    sx={{
      display: "flex",
      gap: 2,
      flexDirection: "row",
      alignItems: "center",
    }}
  >
    <Button text="Get Started" styles={{fontSize: ["sm", "md"], padding: "14px 35px"}}/>
    <Button text="Learn More"  styles={{fontSize: ["sm", "md"], padding: "14px 35px"}}/>
  </div>
  )
};
