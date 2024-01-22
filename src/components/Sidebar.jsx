import { Avatar, Box, Card, Flex, HStack, Input, Stack, Text, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { Users } from '../constants/constants'

const Sidebar = () => {
  const sidebarBgColor = useColorModeValue('whiteAlpha.800', 'blackAlpha.900')
  const borderBgColor = useColorModeValue('gray.400', 'gray.800')
  return (
    <Box minW={'330px'} h={'85vh'} m={4} border={'1px'} rounded={'md'} borderColor={useColorModeValue('gray.400', 'gray.800')} bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.900')} p={4}>
      <Input mb={4} placeholder='Search...'/>
      <Stack>
        {
          Users.map(item => (
            <Card p={2} mb={1} bg={sidebarBgColor} border={'1px'} borderColor={borderBgColor} key={item.id}>
              <Flex alignItems={'center'} justifyContent={'space-between'}>
                <HStack gap={3}>
                  <Wrap>
                    <WrapItem>
                      <Avatar size={'sm'}/>
                    </WrapItem>
                  </Wrap>
                  <Stack gap={1}>
                    <Text fontSize={'14px'}>{item.name}</Text>
                    <Text fontSize={'12px'}>{item.email}</Text>
                  </Stack>
                </HStack>
                <Text>{item.count}</Text>
              </Flex>
            </Card>
          ))
        }
      </Stack>
    </Box>
  )
}

export default Sidebar