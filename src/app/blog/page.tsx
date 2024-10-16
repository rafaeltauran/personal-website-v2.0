'use client'

import { Box, Flex, Heading, Button, Link, Icon } from '@chakra-ui/react';
import { FaCamera } from 'react-icons/fa';

export default function Blog() {
  return (
    <Box
      height="100vh"
      width="100vw"
      backgroundImage="url('/images/aleks-dahlberg-mountains.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
    >
      {/* Dark overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="black"
        opacity="0.5"
        zIndex="1"
      />

      {/* Content (title) */}
      <Flex
        height="100%"
        alignItems="center"
        justifyContent="center"
        position="relative"
        zIndex="2"
        textAlign="center"
      >
        <Heading
          as="h1"
          size="2xl"
          color="white"
          fontWeight="bold"
        >
          Coming Soon
        </Heading>
      </Flex>

      {/* Creator Button */}
      <Link href="https://unsplash.com/@aleksdahlberg" isExternal>
        <Button
          position="absolute"
          bottom="20px"
          right="20px"
          zIndex="2"  // Ensure the button is above the overlay
          size="sm"
          textColor="white.900"
          leftIcon={<Icon as={FaCamera} />}
        >
          Aleks Dahlberg
        </Button>
      </Link>

    </Box>
  );
}

