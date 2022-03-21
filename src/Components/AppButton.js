import React from "react";
import { Button, Box } from "native-base";

function AppButton(props) {
  console.log(props);
  return (
    <Box>
      <Button width={200} bg="#ffd600" onClick={console.log("kodok")}>
        {props.title}
      </Button>
    </Box>
  );
}

export default AppButton;
