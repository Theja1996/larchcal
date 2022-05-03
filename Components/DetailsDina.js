import * as React from 'react';
import {useState} from 'react';
import {TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Box, Center} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import {FormControl} from 'native-base';
import {Input, Button, Text} from 'native-base';

function DetailsScreen3({navigation}) {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [total, setTotal] = useState(0);
  let grade = 0;

  if (total == 1) {
    grade = 'චන්ද්‍ර (සදුදා) - සුබ';
  } else if (total == 2) {
    grade = 'බුද (බදාදා) - අසුබ';
  } else if (total == 3) {
    grade = 'සිකුරු (සිකුරාදා) - සුබ';
  } else if (total == 4) {
    grade = 'රවි (ඉරිදා) - අසුබ';
  } else if (total == 5) {
    grade = 'කුජ (අගහරුවාදා) - අසුබ';
  } else if (total == 6) {
    grade = 'ගුරු (බ්‍රහස්පතින්දා) - සුබ';
  } else if (total == 0) {
    grade = 'ශනි (සෙනසුරාදා) - අසුබ';
  } else {
    grade = 'Error';
  }

  function calculateTotal() {
    setTotal((width * length * 9) % 7);
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
            දින පොරොන්දම :
          </Text>
          <Text bold marginTop="1">
            {grade}
          </Text>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default DetailsScreen3;
