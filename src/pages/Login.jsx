import { Box, Button, Checkbox, Heading, HStack, Icon, Input, Text, useColorMode, useColorModeValue, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { LuArrowUpRightFromCircle } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Login = () => {
  const toast = useToast()
  const { colorMode, setColorMode} = useColorMode()
  const[show, setShow] = useState(false)
  const[value, setValue] = useState('')
  const handleChange = (event) => setValue(event.target.value)
  const handleClick = (e) => setShow(e.target.checked)
  function handleToast() {
    if(value === 'Oybek') {
      toast({
        title: 'Welcome to dashboard!',
        status: 'success',
        position: 'bottom-left ',
      })
    } else {
        toast({
          title: 'Password in correct!',
          status: 'info',
          position: 'bottom-left',
        })
    }
  }
  return (
    <Box w={'full'} h={'100vh'} bg={useColorModeValue('white', 'black')} display={'flex'}  justifyContent={'center'}>
      <Box w={{
        base: '95%',
        md: '400px'
      }} h={'32vh'} pos={'absolute'} rounded={'md'} top={100} border={'1px'} borderColor={'gray.800'} p={4}>
        <Heading fontSize={'22px'} textAlign={'center'} mt={3} mb={6}><Icon as={LuArrowUpRightFromCircle}/>Example IT Solutions</Heading>
        <Input value={value} onChange={handleChange} type={show ? 'text' : 'password'} placeholder='Enter Password:'/>
        <HStack mt={1}>
          <Checkbox onChange={handleClick}/>
          <Text>Show password?</Text>
        </HStack>
        <Link to={value === "Oybek" ? '/home' : '/'} onClick={() => handleToast()}><Button colorScheme={colorMode === 'dark' ? 'telegram' : 'red'} mt={6} w={'full'} mb={4}>Login</Button></Link>
      </Box>
    </Box>
  )
}

export default Login