import { Box, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { Link as RouterLink } from "react-router-dom"

type Feature = {
  title: string
  description: string
}

function ScrollFeature({
  feature,
  alignRight,
}: {
  feature: Feature
  alignRight: boolean
}) {
  const [isVisible, setIsVisible] = useState(false)
  const featureRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = featureRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={featureRef}
      maxW={{ base: "100%", md: "760px" }}
      ml={{ base: 0, md: alignRight ? "auto" : 0 }}
      mr={{ base: 0, md: alignRight ? 0 : "auto" }}
      transform={
        isVisible
          ? "translateX(0) scale(1)"
          : alignRight
            ? "translateX(70px) scale(0.98)"
            : "translateX(-70px) scale(0.98)"
      }
      opacity={isVisible ? 1 : 0}
      transition="transform 700ms ease, opacity 700ms ease"
      bg="rgba(255, 255, 255, 0.12)"
      border="1px solid rgba(255, 255, 255, 0.3)"
      borderRadius="20px"
      backdropFilter="blur(8px)"
      p={{ base: 6, md: 8 }}
      boxShadow="0 20px 35px rgba(0, 0, 0, 0.25)"
    >
      <Text
        color="white"
        fontSize={{ base: "1.3rem", md: "1.7rem" }}
        fontWeight="800"
        textTransform="uppercase"
        letterSpacing="0.04em"
        mb={3}
      >
        {feature.title}
      </Text>
      <Text color="whiteAlpha.900" fontSize={{ base: "1rem", md: "1.1rem" }} lineHeight="1.8">
        {feature.description}
      </Text>
    </Box>
  )
}

function LandingPage() {
  const features: Feature[] = [
    {
      title: "Multiplayer",
      description:
        "Workout with friends, see their progress, and compare results afterwards. Don't just look better, show them why.",
    },
    {
      title: "Real-Time Lift Tracking",
      description:
        "Log sets, reps, and weight to track your own progress.",
    },
    {
      title: "Muscle Heatmap",
      description:
        "Dont just wonder what you hit, see it in realtime. Muscles activated will show on the muscle-man (or muscle-woman for you ladies) so you can see exactly what you hit and if it's recovered to hit it again.",
    },
  ]

  return (
    <Box
      minH="100dvh"
      w="100%"
      backgroundImage="linear-gradient(180deg, rgb(255, 255, 255) 0%, #202c76 55%)"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      px={{ base: 6, md: 10 }}
      pb={{ base: 12, md: 20 }}
    >
      <Box
        minH="100dvh"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <Text
          color="white"
          fontSize={{ base: "2.2rem", md: "4rem" }}
          lineHeight="1.05"
          fontWeight="500"
          letterSpacing="0.02em"
          textTransform="uppercase"
        >
          Don&apos;t just be a gym rat
        </Text>

        <Text
          mt={{ base: 3, md: 7 }}
          color="white"
          fontSize={{ base: "2.6rem", md: "5rem" }}
          lineHeight="0.95"
          fontWeight="800"
          letterSpacing="0.03em"
          textTransform="uppercase"
        >
          Be a MeatHead
        </Text>
      </Box>

      <Box maxW="1100px" mx="auto" display="flex" flexDir="column" gap={{ base: 8, md: 12 }}>
        {features.map((feature, index) => (
          <ScrollFeature key={feature.title} feature={feature} alignRight={index % 2 === 1} />
        ))}
      </Box>

      <Box
        as="footer"
        mt={{ base: 16, md: 20 }}
        pt={8}
        borderTop="1px solid rgba(255, 255, 255, 0.25)"
        display="flex"
        flexWrap="wrap"
        gap={{ base: 4, md: 6 }}
        justifyContent="center"
        alignItems="center"
        pb={2}
      >
        <RouterLink to="/tos" className="footer-legal-link">
          Terms of Service
        </RouterLink>
        <Text color="whiteAlpha.600" fontSize="sm" aria-hidden>
          |
        </Text>
        <RouterLink to="/privacy" className="footer-legal-link">
          Privacy Policy
        </RouterLink>
        <Text color="whiteAlpha.600" fontSize="sm" aria-hidden>
          |
        </Text>
        <RouterLink to="/support" className="footer-legal-link">
          Support
        </RouterLink>
      </Box>
    </Box>
  )
}

export default LandingPage
