import * as React from 'react';
import {useState} from 'react';
import {TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Box, Center} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import {FormControl} from 'native-base';
import {Input, Button, Text} from 'native-base';

function DetailsScreen6({navigation}) {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [total, setTotal] = useState(0);
  let grade = 0;

  if (total == 1 || total == 6 || total == 11 || total == 16 || total == 21 || total == 26   )  {
    grade = 'නන්දා - සුබ';
  } else if (total == 2 || total == 7 || total == 12 || total == 17 || total == 22 || total == 27) {
    grade = 'භද්‍ර - අසුබ';
  } else if (total == 3 || total == 8 || total == 13 || total == 18 || total == 23 || total == 28) {
    grade = 'ජයා - සුබ';
  } else if (total == 4 || total == 9 || total == 14 || total == 19 || total == 24 || total == 29) {
    grade = 'රික්තා - අසුබ';
  } else if (total == 5 || total == 10 ||total == 15 || total == 20 || total == 25 || total == 0 ) {
    grade = 'පුර්ණා - සුබ';
  }else {
    grade = 'Error';
  }

  function calculateTotal() {
    setTotal((width * length * 9) % 30);
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
          තිථි පොරොන්දම :
          </Text>
          <Text bold marginTop="1">
            {grade}
          </Text>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default DetailsScreen6;
