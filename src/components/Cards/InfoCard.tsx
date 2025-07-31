/** @jsxImportSource theme-ui */

type Props = {
  heading: string;
  subHeading: string;
  Image: React.FC<React.SVGProps<SVGSVGElement>>;
  styles?: React.CSSProperties;
};

export const InfoCard = ({ heading, subHeading, Image, styles }: Props) => {
  return (
    <div sx={{ backgroundColor: "#E1CEF2", padding: 3, paddingTop: 5, cursor: "pointer", ...styles }}>
      <div sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <p sx={{ margin: 0 }}>{heading}</p>
          <p sx={{ margin: 0, fontSize:"50px", fontWeight: "bold" }}>{subHeading}</p>
        </div>
        <div sx={{ width: "40px", height: "40px", marginRight: "20px" }}>
          <Image sx={{ height: "auto" }} />
        </div>
      </div>
    </div>
  );
};

