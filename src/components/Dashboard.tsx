/** @jsxImportSource theme-ui */

import { Clipboard } from "../logos/Clipboard";
import { RightArrow } from "../logos/RightArrow";
import { Search } from "../logos/Search";
import { InfoCard } from "./Cards/InfoCard";

export const Dashboard = () => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: ["1fr", "repeat(4, 1fr)"],
        gap: 2,
        padding: 4,
      }}
    >
      <InfoCard
        heading="Active projects"
        subHeading="500k+"
        Image={Clipboard}
      />
      <InfoCard heading="Errors logged" subHeading="10k+" Image={Clipboard} />
      <InfoCard heading="Solutions found" subHeading="20k+" Image={Search} />
      <InfoCard heading="Try Free" subHeading="Trial" Image={RightArrow} styles={{backgroundColor: "#d5d5d5"}}  />
    </div>
  );
};
