import { Box, Text } from '@chakra-ui/react'
import { useEffect } from 'react'

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
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="#fff"
      px={6}
    >
      <Text fontSize="lg" color="#1F2A44">
        <a href="mailto:meatheadapp@gmail.com" className="support-email-link">
          meatheadapp@gmail.com
        </a>
      </Text>
    </Box>
  )
}
