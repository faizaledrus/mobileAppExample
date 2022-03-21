import React, { useState } from "react";
import { Center, Text } from "native-base";

function InboxScreen() {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tabActive, setTabActive] = useState("tab1");

  const handleTab1 = () => {
    setTab1(true);
    setTab2(false);
    console.log("setTab1 is ON");
    setTabActive("tab1");
  };

  const handleTab2 = () => {
    setTab1(false);
    setTab2(true);
    console.log("setTab2 is ON");
    setTabActive("tab2");
  };
  return (
    <Center>
      <Text onPress={() => handleTab1()}>inbox Screen</Text>
      <Text onPress={() => handleTab2()}>inbox Screen</Text>
      <Text>{tabActive}</Text>
    </Center>
  );
}

export default InboxScreen;
