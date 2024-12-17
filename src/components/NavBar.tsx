import { HStack, Image } from '@chakra-ui/react'
import world from '../assets/world.svg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={world} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar