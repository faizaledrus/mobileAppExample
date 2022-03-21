import React from "react";
import {
  Box,
  Text,
  ScrollView,
  Center,
  Image,
  Flex,
  Button,
} from "native-base";
import AppBarSeach from "../Components/AppBarSeach";
import AppCard from "../Components/AppCard";
import AppCardSmall from "../Components/AppCardSmall";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Api/Firebase";
import useAuthentication from "../Api/useAuthentication";

function DashboardScreen() {
  const auth = getAuth(app);
  const user = useAuthentication();

  return (
    <Box safeArea flex={1}>
      <AppBarSeach />
      <ScrollView>
        <Center>
          <Box maxWidth="300">
            <Button maxWidth={200} onPress={() => signOut(auth)}>
              Logout
            </Button>

            <Text>di sini slider gambar harus nya bisa swipe kiri kanan</Text>
            <Box margin={2} bg="tomato">
              <Image
                size={150}
                resizeMode={"contain"}
                borderRadius={100}
                source={{
                  uri: "https://wallpaperaccess.com/full/317501.jpg",
                }}
                alt="Alternate Text"
              />
              <Image
                size={150}
                resizeMode={"contain"}
                borderRadius={100}
                source={{
                  uri: "https://wallpaperaccess.com/full/317501.jpg",
                }}
                alt="Alternate Text"
              />
            </Box>
            <Box margin={2} bg="gray">
              <Text>Beri Beasiswa kepada murid SD kelas 1-3</Text>
              <Flex direction="column">
                <Center>
                  <AppCard />
                </Center>
                <Center>
                  <AppCard />
                </Center>
                <Center>
                  <AppCard />
                </Center>
              </Flex>
            </Box>
            <Box margin={2}>
              <Text>Pilihan beasiswa.app (bisa di slide ke kanan kiri</Text>
              <AppCardSmall />
              <AppCardSmall />
            </Box>
          </Box>
        </Center>
      </ScrollView>
    </Box>
  );
}

export default DashboardScreen;
