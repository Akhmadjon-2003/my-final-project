import { Box, Flex, Input, Stack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import PriceCard from '../components/PriceCard'
import Sidebar from '../components/Sidebar'
import StatusList from '../components/StatusList'

const Home = () => {
  return (
    <Box bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.900')}>
      <Header/>
      <Flex flexDir={{
        base: 'column',
        lg: 'row',
      }}>
        <Sidebar/>
        <Stack w={'full'} my={4} rounded={'md'} p={4} border={'1px'} borderColor={useColorModeValue('gray.400', 'gray.800')}>
          <PriceCard/>
          <Input w={'360px'} mt={3} placeholder='Filter Emails...'/>
          <StatusList/>
        </Stack>
      </Flex>
    </Box>
  )
}

export default Home