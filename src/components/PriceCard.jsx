import { Card, Flex, Grid, GridItem, Stack, Text, Icon, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { priceCard } from '../constants/constants'

const PriceCard = () => {
  const borderBgColor = useColorModeValue('gray.400', 'gray.800')
  return (
    <Grid gridTemplateColumns={{
      base: '1fr',
      md: '1fr 1fr',
      lg: '1fr 1fr 1fr 1fr'
    }} gap={4}>
      {
        priceCard.map(item => (
          <GridItem border={'1px'} rounded={'md'} borderColor={borderBgColor} p={3} key={item.id}>
            <Flex alignItems={'flex-start'} justifyContent={'space-between'}>
              <Stack gap={1}>
                <Text fontSize={'16px'}>{item.cardType}</Text>
                <Text fontSize={'22px'}>{item.price}</Text>
                <Text fontSize={'12px'}>{item.growth}</Text>
              </Stack>
              <Icon fontSize={'20px'} as={item.icon}/>
            </Flex>
          </GridItem>
        ))
      }
    </Grid>
  )
}

export default PriceCard