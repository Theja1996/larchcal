import * as React from 'react';
import {useState} from 'react';
import {Box, Center, ScrollView, Stack} from 'native-base';
import {NativeBaseProvider} from 'native-base';
import {FormControl} from 'native-base';
import {Input, Button, Text} from 'native-base';

function DetailsScreen({navigation}) {
  //   ====================Aya porondama start====================
  const [feet, setFeet] = useState('');
  const [inch, setInch] = useState('');
  const [feets, setFeets] = useState('');
  const [inches, setInches] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [total, setTotal] = useState();
  let grade = 0;

  if (total == 1) {
    grade = 'අශ්ව - ඉතා සුබ';
  } else if (total == 2) {
    grade = 'ධූම - ඉතා අසුබ';
  } else if (total == 3) {
    grade = 'සිංහ - ඉතා සුබ';
  } else if (total == 4) {
    grade = 'සුනඛ - ඉතා අසුබ';
  } else if (total == 5) {
    grade = 'ගව - ඉතා සුබ';
  } else if (total == 6) {
    grade = 'කොටලු - ඉතා අසුබ';
  } else if (total == 7) {
    grade = 'ගජ - ඉතා සුබ';
  } else if (total == 0) {
    grade = 'කාක - ඉතා අසුබ';
  } else {
    grade = ' ';
  }

  //   ====================Aya porondama end====================

  //   ====================Neketh porondama start====================
  const [totalNeketh, setTotalNeketh] = useState();
  let gradeNeketh = 0;

  if (totalNeketh == 1) {
    gradeNeketh = 'පුෂ- සුබ';
  } else if (totalNeketh == 2) {
    gradeNeketh = 'වීසා';
  } else if (totalNeketh == 3) {
    gradeNeketh = 'සියාවස - සුබ ';
  } else if (totalNeketh == 4) {
    gradeNeketh = 'මුව සිරස';
  } else if (totalNeketh == 5) {
    gradeNeketh = 'හත';
  } else if (totalNeketh == 6) {
    gradeNeketh = 'උත්‍රසල';
  } else if (totalNeketh == 7) {
    gradeNeketh = 'බෙරණ';
  } else if (totalNeketh == 8) {
    gradeNeketh = 'මා - සුබ';
  } else if (totalNeketh == 9) {
    gradeNeketh = 'දෙට';
  } else if (totalNeketh == 10) {
    grade = 'උත්‍රපුටුප - සුබ';
  } else if (totalNeketh == 11) {
    gradeNeketh = 'පුනාවස - සුබ';
  } else if (totalNeketh == 12) {
    gradeNeketh = 'සා';
  } else if (totalNeketh == 13) {
    gradeNeketh = 'දෙනට';
  } else if (totalNeketh == 14) {
    gradeNeketh = 'රෙහෙණ';
  } else if (totalNeketh == 15) {
    gradeNeketh = 'උත්‍රපල්';
  } else if (totalNeketh == 16) {
    gradeNeketh = 'පුවසල';
  } else if (totalNeketh == 17) {
    grade = 'අස්විද';
  } else if (totalNeketh == 18) {
    gradeNeketh = 'අස්ලිය - සුබ';
  } else if (totalNeketh == 19) {
    gradeNeketh = 'අනුර';
  } else if (totalNeketh == 20) {
    gradeNeketh = 'පුවපුටුප - සුබ';
  } else if (totalNeketh == 21) {
    gradeNeketh = 'අද - සුබ';
  } else if (totalNeketh == 22) {
    gradeNeketh = 'සිත';
  } else if (total == 23) {
    gradeNeketh = 'සුවන';
  } else if (totalNeketh == 24) {
    gradeNeketh = 'කැති';
  } else if (totalNeketh == 25) {
    gradeNeketh = 'පුවපල් - සුබ';
  } else if (totalNeketh == 26) {
    gradeNeketh = 'මුල';
  } else if (totalNeketh == 0) {
    gradeNeketh = 'රේවති';
  } else {
    gradeNeketh = ' ';
  }

  //   ====================Neketh porondama end====================

  //   ====================Dina porondama start====================
  const [totalDina, setTotalDina] = useState();
  let gradeDina = 0;

  if (totalDina == 1) {
    gradeDina = 'චන්ද්‍ර (සදුදා) - සුබ';
  } else if (totalDina == 2) {
    gradeDina = 'බුද (බදාදා) - අසුබ';
  } else if (totalDina == 3) {
    gradeDina = 'සිකුරු (සිකුරාදා) - සුබ';
  } else if (totalDina == 4) {
    gradeDina = 'රවි (ඉරිදා) - අසුබ';
  } else if (totalDina == 5) {
    gradeDina = 'කුජ (අගහරුවාදා) - අසුබ';
  } else if (totalDina == 6) {
    gradeDina = 'ගුරු (බ්‍රහස්පතින්දා) - සුබ';
  } else if (totalDina == 0) {
    gradeDina = 'ශනි (සෙනසුරාදා) - අසුබ';
  } else {
    gradeDina = ' ';
  }
  //   ====================Dina porondama end====================

  //   ====================Anshaka porondama start====================
  const [totalAnshaka, setTotalAnshaka] = useState();
  let gradeAnshaka = 0;

  if (totalAnshaka == 1) {
    gradeAnshaka = 'අර්ථ - සුබ';
  } else if (totalAnshaka == 2) {
    gradeAnshaka = 'අර්ථහීන - අසුබ';
  } else if (totalAnshaka == 3) {
    gradeAnshaka = 'බල - සුබ';
  } else if (totalAnshaka == 4) {
    gradeAnshaka = 'දුර්බල - අසුබ';
  } else if (totalAnshaka == 5) {
    gradeAnshaka = 'භූත - සුබ';
  } else if (totalAnshaka == 6) {
    gradeAnshaka = 'ධාන්‍ය - සුබ';
  } else if (totalAnshaka == 7) {
    gradeAnshaka = 'තස් - අසුබ';
  } else if (totalAnshaka == 8) {
    gradeAnshaka = 'නෘපති - අසුබ';
  } else if (totalAnshaka == 0) {
    gradeAnshaka = 'ප්‍රේත - අසුබ';
  } else {
    gradeAnshaka = ' ';
  }
  //   ====================Anshaka porondama end====================

  //   ====================Rashi porondama start====================

  const [totalRashi, setTotalRashi] = useState();
  let gradeRashi = 0;

  if (totalRashi == 1) {
    gradeRashi = 'මේෂ - අසුබ';
  } else if (totalRashi == 2) {
    gradeRashi = 'වෘෂභ - සුබ';
  } else if (totalRashi == 3) {
    gradeRashi = 'මිථුන - සුබ';
  } else if (totalRashi == 4) {
    gradeRashi = 'කටක - අසුබ';
  } else if (totalRashi == 5) {
    gradeRashi = 'සිංහ - සුබ';
  } else if (totalRashi == 6) {
    gradeRashi = 'කන්‍යා - අසුබ';
  } else if (totalRashi == 7) {
    gradeRashi = 'තුලා - අසුබ';
  } else if (totalRashi == 8) {
    gradeRashi = 'වෘශ්චික - අසුබ';
  } else if (totalRashi == 9) {
    gradeRashi = 'ධනු - සුබ';
  } else if (totalRashi == 10) {
    gradeRashi = 'මකර - අසුබ';
  } else if (totalRashi == 11) {
    gradeRashi = 'කුම්භ - සුබ';
  } else if (totalRashi == 0) {
    gradeRashi = 'මීන - අසුබ';
  } else {
    gradeRashi = ' ';
  }
  //   ====================Rashi porondama end====================

  //   ====================Thithi porondama start====================
  const [totalThithi, setTotalThithi] = useState();
  let gradeThithi = 0;

  if (
    totalThithi == 1 ||
    totalThithi == 6 ||
    totalThithi == 11 ||
    totalThithi == 16 ||
    totalThithi == 21 ||
    totalThithi == 26
  ) {
    gradeThithi = 'නන්දා - සුබ';
  } else if (
    totalThithi == 2 ||
    totalThithi == 7 ||
    totalThithi == 12 ||
    totalThithi == 17 ||
    totalThithi == 22 ||
    totalThithi == 27
  ) {
    gradeThithi = 'භද්‍ර - අසුබ';
  } else if (
    totalThithi == 3 ||
    totalThithi == 8 ||
    totalThithi == 13 ||
    totalThithi == 18 ||
    totalThithi == 23 ||
    totalThithi == 28
  ) {
    gradeThithi = 'ජයා - සුබ';
  } else if (
    totalThithi == 4 ||
    totalThithi == 9 ||
    totalThithi == 14 ||
    totalThithi == 19 ||
    totalThithi == 24 ||
    totalThithi == 29
  ) {
    gradeThithi = 'රික්තා - අසුබ';
  } else if (
    totalThithi == 5 ||
    totalThithi == 10 ||
    totalThithi == 15 ||
    totalThithi == 20 ||
    totalThithi == 25 ||
    totalThithi == 0
  ) {
    gradeThithi = 'පුර්ණා - සුබ';
  } else {
    gradeThithi = ' ';
  }
  //   ====================Thithi porondama end====================

  //   ====================Wansha porondama start====================
  const [totalWansha, setTotalWansha] = useState();
  let gradeWansha = 0;

  if (totalWansha == 1) {
    gradeWansha = 'බ්‍රාහ්මණ - සුබ';
  } else if (totalWansha == 2) {
    gradeWansha = 'ක්ශත්‍රීය - සුබ';
  } else if (totalWansha == 3) {
    gradeWansha = 'වෛශ්‍ය - සුබ';
  } else if (totalWansha == 0) {
    gradeWansha = 'ශුද්‍ර - අසුබ';
  } else {
    gradeWansha = ' ';
  }

  //   ====================Wansha porondama end====================

  //   ====================Dewatha porondama start====================
  const [totalDewatha, setTotalDewatha] = useState();
  let gradeDewatha = 0;

  if (totalDewatha == 1) {
    gradeDewatha = 'බ්‍රාහ්ම - සුබ';
  } else if (totalDewatha == 2) {
    gradeDewatha = 'විශ්ණු - අසුබ';
  } else if (totalDewatha == 0) {
    gradeDewatha = 'ශිව - අසුබ';
  } else {
    gradeDewatha = ' ';
  }

  //   ====================Dewatha porondama end====================

  //   ====================Ayusha porondama start====================

  const [totalAyusha, setTotalAyusha] = useState();
  let gradeAyusha = 0;

  if (totalAyusha < 50) {
    gradeAyusha = 'අසුබ';
  } else if (totalAyusha == 50) {
    gradeAyusha = 'මධ්‍යම';
  } else if (totalAyusha > 50) {
    gradeAyusha = 'සුබ';
  } else {
    gradeAyusha = ' ';
  }
  //   ====================Ayusha porondama end====================

  //   ====================Aya porondama start====================
  const [totalAya, setTotalAya] = useState();
  let gradeAya = 0;

  if (totalAya < 5) {
    gradeAya = 'අසුබ';
  } else if (totalAya == 5) {
    gradeAya = 'මධ්‍යම';
  } else if (totalAya > 5) {
    gradeAya = 'සුබ';
  } else {
    gradeAya = ' ';
  }

  //   ====================Aya porondama end====================

  //   ====================Weya porondama start====================
  const [totalWeya, setTotalWeya] = useState();
  let gradeWeya = 0;

  if (totalWeya < 5) {
    gradeWeya = 'සුබ';
  } else if (totalWeya == 5) {
    gradeWeya = 'මධ්‍යම';
  } else if (totalWeya > 5) {
    gradeWeya = 'අසුබ';
  } else {
    gradeWeya = ' ';
  }
  //   ====================Weya porondama end====================
  function calculateTotal() {
    setLength((feet * 12) + inch);
    setWidth((feets * 12) + inches);
    setTotal((width * length * 3) % 8);
    setTotalNeketh((width * length * 8) % 27);
    setTotalDina((width * length * 9) % 7);
    setTotalAnshaka((width * length * 4) % 9);
    setTotalRashi((width * length * 5) % 12);
    setTotalThithi((width * length * 9) % 30);
    setTotalWansha((width * length * 3) % 4);
    setTotalDewatha((width * length * 5) % 3);
    setTotalAyusha((width * length * 27) % 100);
    setTotalAya((width * length * 8) % 12);
    setTotalWeya((width * length * 9) % 10);
  }
  const resetInputField = () => {
    setFeet('');
    setFeets('');
    setInch('');
    setInches('');
    setWidth('');
    setLength('');
    setTotal('non');
    setTotalNeketh('non');
    setTotalDina('non');
    setTotalAnshaka('non');
    setTotalRashi('non');
    setTotalThithi('non');
    setTotalWansha('non');
    setTotalDewatha('non');
    setTotalAyusha('non');
    setTotalAya('non');
    setTotalWeya('non');
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <Box marginTop="5" w="75%">
            <FormControl>
              <FormControl.Label>දිග (Length)</FormControl.Label>

              <Stack
                mb="2.5"
                mt="1.5"
                direction={{
                  base: 'row',
                }}
                space={10}
                mx={{
                  base: 'auto',
                  md: '0',
                }}>
                {/* <Input
           
            variant="filled"
            keyboardType="numeric"
            value={length}
            placeholder="දිග"
            onChangeText={val => setLength(+val)}
          /> */}
                <Input
                  variant="filled"
                  keyboardType="numeric"
                  value={feet.toString()}
                  placeholder="අඩි"
                  onChangeText={val => setFeet(parseInt(+val,10))}
                  width="128"
                  type='number'
                />
                <Input
                  variant="filled"
                  keyboardType="numeric"
                  value={inch.toString()}
                  placeholder="අඟල්"
                  onChangeText={val => setInch(parseInt(+val,10))}
                  width="128"
                  type='number'
                />
              </Stack>
              <FormControl>
                <FormControl.Label>පළල (Width)</FormControl.Label>
              </FormControl>
              <Stack
                mb="2.5"
                mt="1.5"
                direction={{
                  base: 'row',
                }}
                space={10}
                mx={{
                  base: 'auto',
                  md: '0',
                }}>
                {/* <Input
            variant="filled"
            keyboardType="numeric"
            value={width}
            placeholder="පළල"
            onChangeText={val => setWidth(+val)}
          /> */}
                <Input
                  variant="filled"
                  keyboardType="numeric"
                  value={feets.toString()}
                  placeholder="අඩි"
                  onChangeText={val => setFeets(parseInt(+val,10))}
                  width="128"
                  type='number'
                />
                <Input
                  variant="filled"
                  keyboardType="numeric"
                  value={inches.toString()}
                  placeholder="අඟල්"
                  onChangeText={val => setInches(parseInt(+val,10))}
                  width="128"
                  type='number'
                />
              </Stack>
              <Stack
                mb="2.5"
                mt="1.5"
                direction={{
                  base: 'row',
                }}
                space={10}
                mx={{
                  base: 'auto',
                  md: '0',
                }}>
                <Button
                  size="lg"
                  height="45"
                  width="128"
                  background="indigo.500"
                  onPress={calculateTotal}>
                  Result
                </Button>
                <Button
                  width="128"
                  size="lg"
                  height="45"
                  onPress={resetInputField}>
                  Reset
                </Button>
              </Stack>
              <Text>
          width: {width}, length: {length} total:{total} Neketh:{totalNeketh}
          Dina : {totalDina}  Anshaka:{totalAnshaka} Rashi: {totalRashi}
          Thithi :{totalThithi} Wansha:{totalWansha} Dewatha:{totalDewatha}
          Ayusha: {totalAyusha} Aya:{totalAya} Weya:{totalWeya}
          </Text>
              <Text bold color="cyan.600" >
                ආය පොරොන්දම :
                <Text bold color="black">
                  {grade}
                </Text>
              </Text>

              <Text bold color="cyan.600" marginTop="4">
                නැකැත් පොරොන්දම :
                <Text bold color="black">
                  {gradeNeketh}
                </Text>
              </Text>

              <Text bold color="cyan.600" marginTop="4">
                දින පොරොන්දම :
                <Text bold color="black">
                  {gradeDina}
                </Text>
              </Text>

              <Text bold color="cyan.600" marginTop="4">
                අංශක පොරොන්දම :
                <Text bold color="black">
                  {gradeAnshaka}
                </Text>
              </Text>

              <Text bold color="cyan.600" marginTop="4">
                රාශි පොරොන්දම :
                <Text bold color="black">
                  {gradeRashi}
                </Text>
              </Text>
              <Text bold color="cyan.600" marginTop="4">
                තිථි පොරොන්දම :
                <Text bold color="black">
                  {gradeThithi}
                </Text>
              </Text>
              <Text bold color="cyan.600" marginTop="4">
                වංශ පොරොන්දම :
                <Text bold color="black">
                  {gradeWansha}
                </Text>
              </Text>
              <Text bold color="cyan.600" marginTop="4">
                දේවතා පොරොන්දම :
                <Text bold color="black">
                  {gradeDewatha}
                </Text>
              </Text>
              <Text bold color="cyan.600" marginTop="4">
                ආයුෂ පොරොන්දම :
                <Text bold color="black">
                  {gradeAyusha}
                </Text>
              </Text>
              <Text bold color="cyan.600" marginTop="4">
                අය පොරොන්දම :
                <Text bold color="black">
                  {gradeAya}
                </Text>
              </Text>
              <Text bold color="cyan.600" marginTop="4" marginBottom='5'>
                වැය පොරොන්දම :
                <Text bold color="black">
                  {gradeWeya}
                </Text>
              </Text>
            </FormControl>
          </Box>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default DetailsScreen;
