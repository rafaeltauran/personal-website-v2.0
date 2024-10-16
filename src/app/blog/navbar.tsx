'use client'

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Input,
  InputGroup,
  InputRightElement,
  Link,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import NextLink from 'next/link'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      {/* Navbar */}
      <Box
        position="fixed"  // Makes the navbar sticky
        top="0"
        width="100%"
        zIndex="1000"
        bg={useColorModeValue('gray.100', 'gray.800')}
        px={4}
        boxShadow="md"
        opacity="0.8"
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* Clickable Favicon (Link to Homepage) */}
          <Link as={NextLink} href="/">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>

          {/* Search Bar in the Middle */}
          <InputGroup maxW="400px" mx={4}>
            <Input
              placeholder="Search..."
              bg={useColorModeValue('whiteAlpha.900', 'gray.700')}
              color={useColorModeValue('black', 'white')}
            />
            <InputRightElement>
              <Button variant="ghost" aria-label="Search">🔍</Button>
            </InputRightElement>
          </InputGroup>

          {/* Theme Toggle Button */}
          <Stack direction={'row'} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}

