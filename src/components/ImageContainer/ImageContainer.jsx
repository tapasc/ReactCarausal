export default function ImageContainer({ path }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "10px",
        userSelect: "none",
        boxShadow: "1px 1px 10px rgba(0,0,0,0.7)",
      }}
    >
      <img
        onLoad={() => {
          // console.log("loaded");
        }}
        width="100%"
        height="100%"
        src={path}
        alt="nature"
      />
    </div>
  );
}
