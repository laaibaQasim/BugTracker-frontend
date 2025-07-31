/** @jsxImportSource theme-ui */
import { Bug } from "../../logos/Bug";
import { Button } from "../common/Button";
import { useScreenSize } from "../hooks/useScreenSize";

export const Navbar = () => {
  const {isMobile} = useScreenSize();
  return (
    <div
      sx={{
        backgroundColor: "#fffff",
        padding: ["15px 20px","15px 50px"],
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position: "sticky",
      }}
    >
      <div
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 1,
        }}
      >
        <Bug />
        <h3 sx={{ margin: 1 }}>BugTracker</h3>
      </div>
      {!isMobile && (
        <ul
          sx={{
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            display: "flex",
            gap: 4,
            margin: 0,
            padding: 0,
          }}
        >
          <li sx={{ cursor: "pointer" }}>Home</li>
          <li sx={{ cursor: "pointer" }}>About</li>
          <li sx={{ cursor: "pointer" }}>Contact</li>
        </ul>
      )}
      <Button text="Sign in" />
    </div>
  );
};
