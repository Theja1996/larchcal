import * as React from 'react';
import {useState} from 'react';
import {TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Box, Center} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import {FormControl} from 'native-base';
import {Input, Button, Text} from 'native-base';

function DetailsScreen5({navigation}) {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [total, setTotal] = useState(0);
  let grade = 0;

  if (total == 1) {
    grade = 'මේෂ - අසුබ';
  } else if (total == 2) {
    grade = 'වෘෂභ - සුබ';
  } else if (total == 3) {
    grade = 'මිථුන - සුබ';
  } else if (total == 4) {
    grade = 'කටක - අසුබ';
  } else if (total == 5) {
    grade = 'සිංහ - සුබ';
  } else if (total == 6) {
    grade = 'කන්‍යා - අසුබ';
  } else if (total == 7) {
    grade = 'තුලා - අසුබ';
  }else if (total == 8) {
    grade = 'වෘශ්චික - අසුබ';
  }else if (total == 9) {
    grade = 'ධනු - සුබ';
  } else if (total == 10) {
    grade = 'මකර - අසුබ';
  }else if (total == 11) {
    grade = 'කුම්භ - සුබ';
  }else if (total == 0) {
    grade = 'මීන - අසුබ';
  } else {
    grade = 'Error';
  }

  function calculateTotal() {
    setTotal((width * length * 5) % 12);
  }

  return (
    <NativeBaseProvider>
      <Center>
        <Box marginTop="10" w="75%">
          <FormControl>
            <FormControl.Label>දිග (Length)</FormControl.Label>
          </FormControl>

          <Input
            variant="filled"
            keyboardType="numeric"
            value={length}
            placeholder="දිග"
            onChangeText={val => setLength(+val)}
          />

          <FormControl marginTop="5">
            <FormControl.Label>පළල (Width)</FormControl.Label>
          </FormControl>

          <Input
            variant="filled"
            keyboardType="numeric"
            value={width}
            placeholder="පළල"
            onChangeText={val => setWidth(+val)}
          />
          <Button
            marginTop="7"
            background="indigo.500"
            onPress={calculateTotal}>
            Result
          </Button>

          <Text>
            name: {width}, Age: {length} total:{total}
          </Text>
          <Text bold color="cyan.600" marginTop="4">
            රාශි පොරොන්දම :
          </Text>
          <Text bold marginTop="1">
            {grade}
          </Text>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default DetailsScreen5;
