import React, { useState } from "react";
import { Box, Text, Input, Center, Button } from "native-base";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Api/Firebase";
const auth = getAuth(app);

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      if (result) console.log("SUCCESS");
      else console.log("no error");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Box>
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
        <Button margin={2} onPress={() => handleLogin()}>
          Login
        </Button>
      </Center>
    </Box>
  );
}

export default LoginScreen;
