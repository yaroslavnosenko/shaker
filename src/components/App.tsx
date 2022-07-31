import { Shaker } from '.'
import { ChakraProvider } from '@chakra-ui/react'

export const App = () => {
  return (
    <ChakraProvider>
      <div className="App">
        <Shaker />
      </div>
    </ChakraProvider>
  )
}
