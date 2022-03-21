import { Box, Text, Input, Center, Button } from "native-base";
import React, { useState } from "react";
import { app } from "../../Api/Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function RegisterScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth(app);

  const handleSignUp = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (result) console.log("SUCCESSp[");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box safeArea>
      <Center>
        <Text>Login</Text>
        <Input
          mx="3"
          placeholder="Alamat Email"
          w="75%"
          maxWidth="300px"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          mx="3"
          type="password"
          placeholder="Password"
          w="75%"
          maxWidth="300px"
          onChangeText={(text) => setPassword(text)}
        />
        <Button margin={2} onPress={() => handleSignUp()}>
          Daftar
        </Button>
      </Center>
    </Box>
  );
}

export default RegisterScreen;
