import * as React from 'react';
import {useState} from 'react';

import {
  Text,
  Button,
  Box,
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
} from 'native-base';

function DetailsScreen1({navigation}) {
 
 

  const [feet, setFeet] = useState(0);
  const [inch, setInch] = useState(0);
  const [feets, setFeets] = useState(0);
  const [inches, setInches] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [total, setTotal] = useState(0);
  let grade = 0;
  if (total == 1) {
    grade = 'පුෂ- සුබ';
  } else if (total == 2) {
    grade = 'වීසා';
  } else if (total == 3) {
    grade = 'සියාවස - සුබ ';
  } else if (total == 4) {
    grade = 'මුව සිරස';
  } else if (total == 5) {
    grade = 'හත';
  } else if (total == 6) {
    grade = 'උත්‍රසල';
  } else if (total == 7) {
    grade = 'බෙරණ';
  } else if (total == 8) {
    grade = 'මා - සුබ';
  } else if (total == 9) {
    grade = 'දෙට';
  } else if (total == 10) {
    grade = 'උත්‍රපුටුප - සුබ';
  } else if (total == 11) {
    grade = 'පුනාවස - සුබ';
  } else if (total == 12) {
    grade = 'සා';
  } else if (total == 13) {
    grade = 'දෙනට';
  } else if (total == 14) {
    grade = 'රෙහෙණ';
  } else if (total == 15) {
    grade = 'උත්‍රපල්';
  } else if (total == 16) {
    grade = 'පුවසල';
  } else if (total == 17) {
    grade = 'අස්විද';
  } else if (total == 18) {
    grade = 'අස්ලිය - සුබ';
  } else if (total == 19) {
    grade = 'අනුර';
  } else if (total == 20) {
    grade = 'පුවපුටුප - සුබ';
  } else if (total == 21) {
    grade = 'අද - සුබ';
  } else if (total == 22) {
    grade = 'සිත';
  } else if (total == 23) {
    grade = 'සුවන';
  } else if (total == 24) {
    grade = 'කැති';
  } else if (total == 25) {
    grade = 'පුවපල් - සුබ';
  } else if (total == 26) {
    grade = 'මුල';
  } else if (total == 0) {
    grade = 'රේවති';
  } else {
    grade = 'Error';
  }

  function calculateTotal() {
   setLength((feet*12)+inch);
   setWidth((feets*12)+inches);
    setTotal((width * length * 8) % 27);
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
            value={feet}
            placeholder="අඩි"
            onChangeText={val => setFeet(+val)}
          />
    <Input
            variant="filled"
            keyboardType="numeric"
            value={inch}
            placeholder="අගල්"
            onChangeText={val => setInch(+val)}
          />

          <FormControl marginTop="5">
            <FormControl.Label>පළල (Width)</FormControl.Label>
          </FormControl>

          <Input
            variant="filled"
            keyboardType="numeric"
            value={feets}
            placeholder="අඩි"
            onChangeText={val => setFeets(+val)}
          />
    <Input
            variant="filled"
            keyboardType="numeric"
            value={inches}
            placeholder="අගල්"
            onChangeText={val => setInches(+val)}
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
            නැකැත් පොරොන්දම :
          </Text>
          <Text bold marginTop="1">
            {grade}
          </Text>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}

export default DetailsScreen1;
