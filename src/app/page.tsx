
'use client'
import { Box, Divider, Heading, Text, Flex, Container, Image, Avatar, Icon, Link, useBreakpointValue } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();  // Chakra UI hook for theme toggling

  const themeGif = colorMode === 'light' ? '/icons/sun.gif' : '/icons/moon.gif';

  // Adjust the paragraph text color for light and dark modes
  const paragraphColor = useColorModeValue('gray.700', 'gray.300');
  const keywordColor = useColorModeValue('purple.500', 'green.500');

  return (
    <Container maxW='container.lg' mx="auto" p={4}>

      {/* Header Section */}
      <Flex textAlign={['left', 'left', 'right', 'center']} justify={['flex-end', 'flex-end', 'flex-end', 'space-between']} direction={'row'} align="center">
        <Container>
          {/* Title */}
          <Heading as="h1" size="2xl" pt={8} pb={1} fontFamily="Playfair Display, serif">
            Rafael Tauran
          </Heading>

          {/* Subtitle */}
          <Text
            as='i'
            fontSize={['md', 'lg', 'xl']}
            color='gray.500'
            fontFamily="serif"
            mt={2}
          >
            Goodbye Bloatware. Say hello to simplicity.
          </Text>
        </Container>

        {/* Theme Toggle GIF */}
        <Flex direction="column" align="center" mr={[4, 4, 4, 0]}>
          <Image
            src={themeGif}
            alt="Theme toggle"
            width="100px"
            height="100px"
            cursor="pointer"
            onClick={toggleColorMode}
          />
        </Flex>
      </Flex>

      {/* Main Section */}
      <Flex flexDirection={['column', 'column', 'column', 'row']} my={8} minH="400px">
        {/* Main Article */}
        <Box flex='1'>
          <Container maxW='600px' mx='auto'>
            <Heading as="h2" size="lg" mb={4} fontFamily="serif">
              The Big Scoop
            </Heading>
            <Image
              src="/images/books.webp"
              alt="Books"
              width={'auto'}
              height={'auto'}
              maxW={'100%'}
              maxH={'100%'}
              objectFit={'contain'}
              mb={6}
              rounded={'xl'}
            />
            <Text color={paragraphColor} mb={6}>
              My name is Rafael. I graduated from the University of Warwick with a Master of Engineering degree in <Text as="span" color={keywordColor}>Computer Science</Text> and am currently pursuing a Master of Science degree in <Text as="span" color={keywordColor}>Information Studies (Data Science Track)</Text> at the University of Amsterdam. I like to learn about technology and find joy in understanding new concepts and applying them in real life. My current interests include AI, Statistical Data analytics, and Optimization Methods of algorithms.
            </Text>
          </Container>
        </Box>

        {/* Responsive Divider */}
        <Divider borderWidth={'1px'} orientation={'horizontal'} my={4} alignSelf={'center'} maxW={'550px'} height={'auto'} display={['block', 'block', 'block', 'none']} />
        <Divider borderWidth={'1px'} orientation={'vertical'} mx={4} height={'auto'} display={['none', 'none', 'none', 'block']} />

        {/* Sidebar: Timeline */}
        <Container maxW='600px' w={['100%', '100%', '100%', '30%']} height="100%" p={4} textAlign={['center', 'center', 'center', 'left']}>
          <Heading as="h3" size="md" fontFamily="serif" mb={4}>
            Timeline
          </Heading>
          <Box>
            <Box mb={4}>
              <Heading as="h4" size="sm" fontFamily="serif" color="gray.600">
                2002
              </Heading>
              <Text fontSize="sm" color="gray.500">Born in Jakarta, Indonesia</Text>
            </Box>

            <Box mb={4}>
              <Heading as="h4" size="sm" fontFamily="serif" color="gray.600">
                2024
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Completed Undergraduate Master's Program in Computer Science at the University of Warwick
              </Text>
            </Box>

            <Box mb={4}>
              <Heading as="h4" size="sm" fontFamily="serif" color="gray.600">
                2025
              </Heading>
              <Text fontSize="sm" color="gray.500">
                Expected to complete Graduate Master's Program in Data Science at the University of Amsterdam
              </Text>
            </Box>
          </Box>

          <Divider borderWidth={'1px'} orientation={'horizontal'} mx={4} height={'auto'} display={['block', 'block', 'block', 'none']} />

          {/* Follow Me Section */}
          <Box mt={8}>
            <Heading as="h4" size="md" fontFamily="serif" mb={4}>
              Follow Me
            </Heading>
            <Container>
              <Flex
                direction={['column', 'column', 'column', 'row']}
                alignItems="center"
                justifyContent={['center', 'flex-start']}
              >
                {/* Profile Picture */}
                <Avatar
                  src="/images/face.jpeg"
                  size="xl"
                  name="Rafael Tauran"
                  mb={[4, 0]}
                  mr={[0, 4]}
                />

                {/* Stacked Icons */}
                <Flex direction={['row', 'row', 'row', 'column']} alignItems="center">
                  <Link href="https://github.com/rafaeltauran" isExternal m={4}>
                    <Icon as={FaGithub} boxSize="30px" cursor="pointer" />
                  </Link>

                  <Link href="https://www.linkedin.com/in/rafael-tauran/" isExternal>
                    <Icon as={FaLinkedin} boxSize="30px" cursor="pointer" />
                  </Link>
                </Flex>
              </Flex>

              <Text fontSize="sm" color="gray.500" mt={4} textAlign={['center', 'center', 'center', 'left']}>
                Stay connected through social media and updates.
              </Text>
            </Container>
          </Box>
        </Container>
      </Flex>

      {/* Footer Section */}
      <Box as="footer" textAlign="center" mt={12}>
        <Text color="gray.400">&copy; 2024 Rafael Tauran</Text>
      </Box>
    </Container>
  );
}

