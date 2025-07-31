/** @jsxImportSource theme-ui */
type HeadingProps = {
  text: string;
  subHeading: string;
};

export const Heading = ({ text, subHeading }: HeadingProps) => {
  return (
    <div sx={{maxWidth: "500px", mb: "1px"}}>
      <h1 sx={{fontSize:["30px","60px"], fontWeight: "bolder" }}>{text}</h1>
      <p >{subHeading}</p>
    </div>
  );
};
