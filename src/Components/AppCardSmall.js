import React from "react";
import { Box, Text, Image, Progress } from "native-base";
function AppCardSmall() {
  return (
    <Box maxWidth={100} borderRadius="lg" bg="tomato" padding={2}>
      <Image
        source={{
          uri: "https://wallpaperaccess.com/full/317501.jpg",
        }}
        alt="Alternate Text"
        size="xl"
        borderRadius={25}
      />
      <Text margin={2}>ini small Box</Text>
      <Text margin={2}>Oleh beasiswa.app</Text>
      <Progress value={45} mx="4" />
    </Box>
  );
}

export default AppCardSmall;
