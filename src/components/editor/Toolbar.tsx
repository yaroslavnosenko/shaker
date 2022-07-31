import { Box, Icon, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { BiCube, BiMove, BiHelpCircle } from 'react-icons/bi'

export const Toolbar = () => {
  const [active, setActive] = useState<number>(0)
  return (
    <Box
      position="absolute"
      bottom="4"
      left="4"
      bg="gray.200"
      padding="2"
      rounded="md"
      cursor="pointer"
    >
      <VStack spacing="1">
        <Icon
          boxSize="10"
          p="2"
          color={active === 0 ? 'gray.900' : 'gray.500'}
          onClick={() => setActive(0)}
          as={BiCube}
          rounded="md"
          _hover={{ background: 'gray.300' }}
        />
        <Icon
          boxSize="10"
          p="2"
          color={active === 1 ? 'gray.900' : 'gray.500'}
          onClick={() => setActive(1)}
          as={BiMove}
          rounded="md"
          _hover={{ background: 'gray.300' }}
        />
        <Icon
          boxSize="10"
          p="2"
          color={active === 2 ? 'gray.900' : 'gray.500'}
          onClick={() => setActive(2)}
          as={BiHelpCircle}
          rounded="md"
          _hover={{ background: 'gray.300' }}
        />
      </VStack>
    </Box>
  )
}
