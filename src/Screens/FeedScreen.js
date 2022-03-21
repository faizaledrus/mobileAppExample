import { Box, Text, FlatList } from "native-base";
import { React, useState, useEffect } from "react";

import ApiFeed from "../Api/ApiFeed";

function FeedScreen() {
  const [myJson, setMyJson] = useState();
  const postApi = async () => {
    const result = await ApiFeed.get("/posts");
    console.log("result.data", result);
    if (result.ok) return setMyJson(result.data);
  };
  const renderItem = ({ item }) => <Text> {item.title}</Text>;

  useEffect(() => {
    postApi();
  }, []);

  return (
    <Box flex={1}>
      <Text>kodok</Text>
      <FlatList
        data={myJson}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
}

export default FeedScreen;
