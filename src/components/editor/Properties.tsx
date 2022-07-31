import {
  Box,
  Icon,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { BiColorFill, BiDroplet, BiTrash, BiCubeAlt } from 'react-icons/bi'

export const Properties = () => {
  return (
    <Box
      position="absolute"
      bottom="4"
      right="4"
      bg="gray.200"
      padding="2"
      rounded="md"
      cursor="pointer"
    >
      <HStack spacing="1">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon
                boxSize="10"
                p="2"
                color={'gray.500'}
                as={BiCubeAlt}
                rounded="md"
                _hover={{ color: 'gray.900' }}
              />
            }
          />
          <Input readOnly w="28" type="tel" placeholder="O5sdh" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon
                boxSize="10"
                p="2"
                color={'gray.500'}
                as={BiColorFill}
                rounded="md"
                _hover={{ color: 'gray.900' }}
              />
            }
          />
          <Input w="32" type="tel" placeholder="#000000" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon
                boxSize="10"
                p="2"
                color={'gray.500'}
                as={BiDroplet}
                rounded="md"
                _hover={{ color: 'gray.900' }}
              />
            }
          />
          <Input w="20" type="tel" placeholder="0.1" />
        </InputGroup>

        <Icon
          boxSize="10"
          p="2"
          color={'gray.500'}
          as={BiTrash}
          rounded="md"
          _hover={{ color: 'gray.900' }}
        />
      </HStack>
    </Box>
  )
}
