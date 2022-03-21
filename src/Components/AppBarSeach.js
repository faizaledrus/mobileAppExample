import { Box, Center, Input, ScrollView, Text } from "native-base";
import React from "react";

function AppBarSeach() {
  return (
    <Box safeArea>
      <Center>
        <Input variant="rounded" placeholder="Cari" width={300} />
      </Center>
    </Box>
  );
}

export default AppBarSeach;
