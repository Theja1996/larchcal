import * as React from 'react';
import {useState} from 'react';
import {Box, Center, ScrollView} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import {FormControl} from 'native-base';
import {Input, Button, Text} from 'native-base';

function DetailsScreen10({navigation}) {
  const [riyana, setRiyana] = useState("");
  const [feet, setFeet] = useState('');
  const [meter, setMeter] = useState('');
  const [inch, setInch] = useState(0);
  const [inches, setInches] = useState(0);
  const [inchess, setInchess] = useState(0);


  function calculateInch() {
    setInch(riyana * 31);
  }
  function calculateFeet() {
    setInches(feet * 12);
  }
  function calculateMeter() {
    setInchess(meter * 39.37);
  }
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <Box marginTop="5" w="75%">
            <FormControl>
              <FormControl.Label>රියන් </FormControl.Label>
            </FormControl>

            <Input
              variant="filled"
              keyboardType="numeric"
              value={riyana.toString()}
              placeholder="රියන්"
              onChangeText={val => setRiyana(parseInt(+val,10))}
              type="number"
             
            />

            {/* <FormControl marginTop="5">
            <FormControl.Label>පළල (Width)</FormControl.Label>
          </FormControl>

          <Input
            variant="filled"
            keyboardType="numeric"
            value={width}
            placeholder="පළල"
            onChangeText={val => setWidth(+val)}
          /> */}
            <Button
              clearButtonMode="always"
              marginTop="5"
              background="indigo.500"
              onPress={calculateInch}>
              Result
            </Button>
            {/* <Text>
            name: {width}, Age: {height} total:{total}
          </Text> */}
            <Text bold color="cyan.600" marginTop="4">
              අඟල් :
            </Text>
            <Text bold marginTop="1">
              {inch} '
            </Text>

            <FormControl marginTop="5">
              <FormControl.Label>අඩි (Feet)</FormControl.Label>
            </FormControl>

            <Input
              variant="filled"
              keyboardType="numeric"
              value={feet.toString()}
              placeholder="අඩි"
              onChangeText={val => setFeet(parseInt(+val,10))}
              type="number"
            />
            <Button
              clearButtonMode="always"
              marginTop="5"
              background="indigo.500"
              onPress={calculateFeet}>
              Result
            </Button>

            <Text bold color="cyan.600" marginTop="4">
              අඟල් :
            </Text>
            <Text bold marginTop="1">
              {inches}'
            </Text>

            <FormControl marginTop="5">
              <FormControl.Label>මීටර් (Meter)</FormControl.Label>
            </FormControl>

            <Input
              variant="filled"
              keyboardType="numeric"
              value={meter.toString()}
              placeholder="මීටර්"
              onChangeText={val => setMeter(parseInt(+val,10))}
              type="number"
            />
            <Button
              clearButtonMode="always"
              marginTop="5"
              background="indigo.500"
              onPress={calculateMeter}>
              Result
            </Button>

            <Text bold color="cyan.600" marginTop="4" marginBottom="5">
              අඟල් :
            </Text>
            <Text bold marginTop="1">
              {inchess}'
            </Text>
          </Box>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default DetailsScreen10;
