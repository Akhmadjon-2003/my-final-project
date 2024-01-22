import { Box, Checkbox, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue, Icon, Flex, Text, HStack, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { userStatusList } from '../constants/constants'
import { PiDotsThreeBold } from "react-icons/pi";

const StatusList = () => {
  const[checkedItem, setCheckedItem] = useState([false, false, false, false, false])
  const allChecked = checkedItem.every(Boolean)
  const isIndeterminate = checkedItem.some(Boolean) && !allChecked

  return (
    <>
      <Box overflowX={{
          base: 'auto',
          md: 'hidden',
        }} border={'1px'} rounded={'md'} mt={3} borderColor={useColorModeValue('gray.400', 'gray.800')}>
        <Table>
          <Thead py={100}>
            <Tr>
              <Th py={5}><Checkbox isChecked={allChecked} isIndeterminate={isIndeterminate}onChange={(e) => setCheckedItem([e.target.checked, e.target.checked, e.target.checked, e.target.checked, e.target.checked])}/></Th>
              <Th>Status</Th>
              <Th>Email</Th>
              <Th>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              userStatusList.map(item => (
                <Tr _hover={{
                  bg: 'whiteAlpha.400',
                }} key={item.id}>
                  <Td py={5}><Checkbox isChecked={checkedItem[item.id]}  onChange={(e) => setCheckedItem([checkedItem[item.id] = e.target.checked])}/></Td>
                  <Td>{item.status}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.amount} <Icon ml={5} as={PiDotsThreeBold}/></Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Box>
      <Flex my={4} alignItems={'center'} justifyContent={'space-between'}>
        <Text>0 of 5 rows selected.</Text>
        <HStack>
          <Button variant={'outline'}>Previous</Button>
          <Button variant={'outline'}>Next</Button>
        </HStack>
      </Flex>
    </>
  )
}

export default StatusList