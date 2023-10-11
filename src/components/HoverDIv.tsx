import Box from "@mui/material/Box";
import FirstHook from "../hooks/FirstHook";

function HoverDiv() {
  const [countHover, newCountHover] = FirstHook(0);

  return (
    <div
      onMouseEnter={() => {
        if (
          typeof newCountHover === "function" &&
          typeof countHover === "number"
        ) {
          newCountHover(countHover);
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 100,
          height: 100,
          backgroundColor: "primary.dark",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Box sx={{ width: "50%", fontSize: "30px" }}>
          {countHover.toString()}
        </Box>
      </Box>
    </div>
  );
}

export default HoverDiv;
