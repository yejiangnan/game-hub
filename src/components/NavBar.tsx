import { HStack, Image, Text } from '@chakra-ui/react'
import world from '../assets/world.svg'

const NavBar = () => {
  return (
    <HStack>
      <Image src={world} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar