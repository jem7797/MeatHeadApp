import { Box, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'

export default function SupportPage() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Support'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <Box
      minH="100dvh"
      w="100%"
      backgroundImage="linear-gradient(180deg, rgb(255, 255, 255) 0%, #202c76 70%)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      px={{ base: 6, md: 10 }}
      py={{ base: 12, md: 20 }}
    >
      <Box maxW="760px" mx="auto">
        <RouterLink to="/" className="footer-legal-link">
          Back to Landing Page
        </RouterLink>

        <Box
          mt={6}
          bg="rgba(255, 255, 255, 0.12)"
          border="1px solid rgba(255, 255, 255, 0.3)"
          borderRadius="20px"
          backdropFilter="blur(8px)"
          p={{ base: 6, md: 8 }}
          boxShadow="0 20px 35px rgba(0, 0, 0, 0.25)"
          textAlign="center"
        >
          <Text
            color="white"
            fontSize={{ base: '1.6rem', md: '2.2rem' }}
            fontWeight="800"
            textTransform="uppercase"
            letterSpacing="0.04em"
            mb={3}
          >
            Support
          </Text>
          <Text color="whiteAlpha.900" fontSize={{ base: '1rem', md: '1.1rem' }} mb={4}>
            Reach us anytime for account, billing, or app support.
          </Text>
          <Text fontSize="lg" color="white" fontWeight="700">
            <a href="mailto:meatheadapp@gmail.com" className="support-email-link">
              meatheadapp@gmail.com
            </a>
          </Text>
        </Box>
      </Box>

      <Box
          mt={6}
          maxW="760px"
          mx="auto"
          w="100%"
          bg="rgba(255, 255, 255, 0.12)"
          border="1px solid rgba(255, 255, 255, 0.3)"
          borderRadius="20px"
          backdropFilter="blur(8px)"
          p={{ base: 6, md: 8 }}
          boxShadow="0 20px 35px rgba(0, 0, 0, 0.25)"
          textAlign="center"
        >
          <Text
            color="white"
            fontSize={{ base: '1.6rem', md: '2.2rem' }}
            fontWeight="800"
            textTransform="uppercase"
            letterSpacing="0.04em"
            mb={3}
          >
           Legal Support
          </Text>
          <Text color="whiteAlpha.900" fontSize={{ base: '1rem', md: '1.1rem' }} mb={4}>
            For legal inquiries or concerns you can reach us here:
          </Text>
          <Text fontSize="lg" color="white" fontWeight="700">
            <a href="mailto:meatheadapp@gmail.com" className="support-email-link">
            legal.meathead.app@gmail.com
            </a>
          </Text>
        </Box>

    </Box>
  )
}
