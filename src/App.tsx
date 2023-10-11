import { Box, Stack, Typography } from "@mui/material";
import "./App.css";

import HoverDiv from "./components/HoverDIv";
import Buttons from "./components/Buttons";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <Buttons />
        <HoverDiv />
        <Box className="container">
          <Typography variant="h6" gutterBottom>
            localStorage with React hooks
          </Typography>
          <Form />
        </Box>
      </Stack>
    </>
  );
}

export default App;
