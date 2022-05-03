import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Box,
  Center,
  HStack,
  Text,
  Input,
  Modal,
  NativeBaseProvider,
  Pressable,
  Button,
  VStack,
} from 'native-base';
import {InfoIcon, CircleIcon} from 'native-base';

function HomeScreen({navigation}) {
  const [selected, setSelected] = React.useState(1);
  const [showModal, setShowModal] = React.useState(false);

  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>

    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('Details')}
    //   />

    // </View>

    <NativeBaseProvider>
      <Modal
        shadow={5}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        _backdrop={{
          _dark: {
            bg: 'coolGray.800',
          },
          bg: 'warmGray.50',
        }}>
        <Modal.Content maxWidth="350" maxH="241">
          <Modal.CloseButton />
          <Modal.Header backgroundColor="warmGray.50" fontWeight="extrabold">
            About Us
          </Modal.Header>
          <Modal.Body>
            <Text>
              <CircleIcon size="3" /> Create a 'Return Request' under “My
              Orders” section of App/Website.
            </Text>
            <Text>
              <CircleIcon size="3" /> Create a 'Return Request' under “My
              Orders” section of App/Website.
            </Text>
            <Center>
              <Text marginTop="1">Version 1.0</Text>
            </Center>
            <Center>
              <Text>Copyright 2022 | All Rights Reserved.</Text>
            </Center>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Box
        flex={1}
        bg="white"
        safeAreaTop
        width="100%"
        maxW="400px"
        alignSelf="center">
        <VStack space={4} alignItems="center" marginTop={'30px'}>
          <Center w="64" h="20" bg="indigo.100" rounded="md" shadow={5}>
            <Button
              onPress={() => navigation.navigate('වාස්තු පොරොන්දම්')}
              variant="unstyled"
              _text={{
                color: 'cyan.600',
              }}
              fontWeight="bold">
              වාස්තු පොරොන්දම්
            </Button>
          </Center>
          <Center w="64" h="20" bg="indigo.200" rounded="md" shadow={5}>
            <Button
              onPress={() => navigation.navigate('මිනුම් පරිවර්තකය')}
              variant="unstyled"
              _text={{
                color: 'cyan.700',
              }}
              fontWeight="bold">
             මිනුම් පරිවර්තකය
            </Button>
          </Center>
          
          {/* <Center w="64" h="10" bg="indigo.200" rounded="md" shadow={5}>
            <Button
              onPress={() => navigation.navigate('නැකැත් පොරොන්දම')}
              variant="unstyled"
              _text={{
                color: 'cyan.700',
              }}
              fontWeight="bold">
              නැකැත් පොරොන්දම
            </Button>
          </Center>
          <Center w="64" h="10" bg="indigo.300" rounded="md" shadow={5}>
            <Button
              onPress={() => navigation.navigate('අය-වැය පොරොන්දම')}
              variant="unstyled"
              _text={{
                color: 'cyan.800',
              }}
              fontWeight="bold">
              අය-වැය පොරොන්දම
            </Button>
          </Center>
          <Center w="64" h="10" bg="indigo.400" rounded="md" shadow={5}>
            <Button
              onPress={() => navigation.navigate('දින පොරොන්දම')}
              variant="unstyled"
              _text={{
                color: 'cyan.800',
              }}
              fontWeight="bold">
              දින පොරොන්දම
            </Button>
          </Center>
          <Center w="64" h="10" bg="indigo.500" rounded="md" shadow={5}>
            <Button
              onPress={() => navigation.navigate('අංශක පොරොන්දම')}
              variant="unstyled"
              _text={{
                color: 'cyan.900',
              }}
              fontWeight="bold">
              අංශක පොරොන්දම
            </Button>
          </Center>
          <Center w="64" h="10" bg="indigo.600" rounded="md" shadow={5}>
            <Button
              onPress={() => navigation.navigate('රාශි පොරොන්දම')}
              variant="unstyled"
              _text={{
                color: 'cyan.600',
              }}
              fontWeight="bold">
              රාශි පොරොන්දම
            </Button>
          </Center>
          <Center w="64" h="10" bg="indigo.700" rounded="md" shadow={5}>
            <Button
              onPress={() => navigation.navigate('තිථි පොරොන්දම')}
              variant="unstyled"
              _text={{
                color: 'cyan.600',
              }}
              fontWeight="bold">
              තිථි පොරොන්දම
            </Button>
          </Center>
          <Center w="64" h="10" bg="indigo.800" rounded="md" shadow={5}>
            <Button
              onPress={() => navigation.navigate('වංශ පොරොන්දම')}
              variant="unstyled"
              _text={{
                color: 'cyan.600',
              }}
              fontWeight="bold">
              වංශ පොරොන්දම
            </Button>
          </Center>
          <Center w="64" h="10" bg="indigo.900" rounded="md" shadow={5}>
            <Button
              onPress={() => navigation.navigate('දේවතා පොරොන්දම')}
              variant="unstyled"
              _text={{
                color: 'cyan.600',
              }}
              fontWeight="bold">
              දේවතා පොරොන්දම
            </Button>
          </Center>
          <Center w="64" h="10" bg="indigo.900" rounded="md" shadow={5}>
            <Button
              onPress={() => navigation.navigate('ආයුෂ පොරොන්දම')}
              variant="unstyled"
              _text={{
                color: 'cyan.600',
              }}
              fontWeight="bold">
              ආයුෂ පොරොන්දම
            </Button>
          </Center> */}
          {/* <InfoIcon
            name="info"
            size={30}
            color="#900"
           
            onPress={() => navigation.navigate('රියන් - අඟල්')}
            onMouseOver={({target}) => (target.style.color = 'white')}
          /> */}
        </VStack>
        <Center flex={1}></Center>
        <HStack
          bg="indigo.700"
          rounded="full"
          alignItems="center"
          safeAreaBottom
          shadow={9}>
          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}>
            <Center>
              <InfoIcon
                color="white"
                onPress={() => setShowModal(true)}
                onMouseOver={({target}) => (target.style.color = 'white')}
              />
              {/* <Text color="white" fontSize="12">
                About
              </Text> */}
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default HomeScreen;
