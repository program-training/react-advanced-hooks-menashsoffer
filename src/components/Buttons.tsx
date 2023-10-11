import { Stack, Button } from "@mui/material";
import FirstHook from "../hooks/FirstHook";

function Buttons() {
  const [countGreen, newCountGreen] = FirstHook(0);
  const [countBlue, newCountBlue] = FirstHook(0);
  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
    >
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          if (
            typeof newCountGreen === "function" &&
            typeof countGreen === "number"
          ) {
            newCountGreen(countGreen);
          }
        }}
      >
        Contained {countGreen.toString()}
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          if (
            typeof newCountBlue === "function" &&
            typeof countBlue === "number"
          ) {
            newCountBlue(countBlue);
          }
        }}
      >
        Contained {countBlue.toString()}
      </Button>
    </Stack>
  );
}

export default Buttons;
