import { Heading, VStack, Stack, Box, HStack, Input,Text, Button} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend} from "react-icons/ai"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa"


const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={'40'} p='16' color={'white'}>
<Stack direction={['column','row']}>
   <VStack alignItems={"stretch"} w={"full"} px={'4'}>
    <Heading size='md' textTransform={'uppercase'}>
     Copmany Name
    </Heading>
    <HStack borderBottom={'2px solid white'} py="2">
      <Input placeholder='enter email here...'></Input>
      <Button p={'0'}
      colorScheme='purple'
      variant={'ghost'}
      borderRadius={'0 20px 20px 0'}>

        <AiOutlineSend size={20} />
      </Button>
    </HStack>
   </VStack>
   <VStack w={'full'}
   borderLeft={["none",'1px solid white']}
borderRight={["none",'1px solid white']}>
  <Heading textTransform={"uppercase"}
  textAlign={"center"}>
    Vedio Hub
  </Heading>
  <Text>All Right reserved</Text>
   </VStack>
   <VStack w={'full'}>
    <Heading size={"md"} textTransform={"uppercase"} >
      Social Media
    </Heading>
    <Button variant={'Link'}>
      <FaYoutube size={'md'} />&nbsp;&nbsp;
      <FaFacebook size={'md'}  />&nbsp;&nbsp;
      <FaInstagram size={'md'}  />&nbsp;&nbsp;
      <FaTwitter size={'md'}  />&nbsp;&nbsp;
    </Button>
   </VStack>
</Stack>
  </Box>
}

export default Footer