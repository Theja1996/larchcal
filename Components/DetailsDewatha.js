import * as React from 'react';
import {useState} from 'react';
import {TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Box, Center} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import {FormControl} from 'native-base';
import {Input, Button, Text} from 'native-base';

function DetailsScreen8({navigation}) {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [total, setTotal] = useState(0);
  let grade = 0;

  if (total == 1) {
    grade = 'බ්‍රාහ්ම - සුබ';
  } else if (total == 2) {
    grade = 'විශ්ණු - අසුබ';
  } else if (total == 0) {
    grade = 'ශිව - අසුබ';
  } else {
    grade = 'Error';
  }

  function calculateTotal() {
    setTotal((width * length * 5) % 3);
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
            දේවතා පොරොන්දම :
          </Text>
          <Text bold marginTop="1">
            {grade}
          </Text>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default DetailsScreen8;
