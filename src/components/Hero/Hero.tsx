/** @jsxImportSource theme-ui */

import { Heading } from "./Heading";
import { HeroCtas } from "./HeroCtas";
import { HeroImage } from "../../logos/HeroImage";
import { useScreenSize } from "../hooks/useScreenSize";

export const Hero = () => {
  const {isBigScreen} = useScreenSize();
  return (
    <div
      sx={{
        borderRadius: "0 0 22px 22px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: [3,5],
        paddingRight: [0,"150px"],
        backgroundColor: "#E1CEF2",
        margin: "0 10px",
      }}
    >
      <div sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <Heading
          text="Log Coding errors and streamline debugging!"
          subHeading="Easily track errors across all your projects."
        />
        <HeroCtas />
      </div>
      {isBigScreen && (
        <div sx={{ marginRight: "70px" }}>
          <HeroImage />
        </div>
      )}
    </div>
  );
};
