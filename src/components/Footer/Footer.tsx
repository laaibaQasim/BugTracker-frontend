/** @jsxImportSource theme-ui */

export const Footer = () => {
  return (
    <div
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p sx={{ fontSize: "40px", fontWeight: "bolder" }}>Start Tracking Errors Now</p>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "4px",
          overflow: "hidden",
          width: "fit-content",
          marginBottom: 3,
        }}
      >
        <input
          type="email"
          placeholder="Enter Email for updates"
          sx={{
            border: "none",
            outline: "none",
            padding: "8px 32px",
            fontSize: 2,
            flex: 1,
          }}
        />
        <button
          sx={{
            color: "black",
            border: "none",
            padding: "8px 16px",
            cursor: "pointer",
            fontSize: 2,
            borderRadius: 0,
            backgroundColor: "white",
            ":hover": {
              backgroundColor: "#E1CEF2",
            },
          }}
        >
          {">"}
        </button>
      </div>
      <ul
        sx={{
          listStyle: "none",
          display: "flex",
          gap: 3,
          padding: 0,
          margin: 0,
          grid: "1fr, repeat(4,1fr)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
