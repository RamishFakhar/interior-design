import React, { useState, useEffect } from 'react'
import { Box, Flex, Heading, IconButton } from '@chakra-ui/core'

interface CarouselProps {
  images: string[]
  captions?: { title: string; subtitle: string }[]
  interval?: number
}

const Carousel: React.FC<CarouselProps> = ({ 
  images, 
  captions = [], 
  interval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, interval)
    
    return () => clearInterval(timer)
  }, [images.length, interval])
  
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }
  
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }
  
  return (
    <Box position="relative" height={['60vh', '60vh', '60vh', '70vh']} overflow="hidden">
      {images.map((image, index) => (
        <Box
          key={index}
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundImage={`url(${image})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          opacity={index === currentSlide ? 1 : 0}
          transition="opacity 1s ease-in-out"
          zIndex={index === currentSlide ? 1 : 0}
        />
      ))}
      
      <Flex
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="100%"
        flexDirection="column"
        justifyContent="flex-end"
        paddingX={['1.5em', '1.5em', '1.5em', '15%']}
        paddingBottom="4rem"
        zIndex={2}
      >
        {captions[currentSlide] && (
          <>
            <Heading
              as="h2"
              fontSize={['4xl', '5xl', '6xl', '6xl', '6xl']}
              color="white"
              bg="orange.500"
              mb="3"
              width="fit-content"
              paddingX={['4px', '12px', '12px', '16px', '24px']}
              paddingY={['4px', '4px', '12px', '12px', '16px']}
            >
              {captions[currentSlide].title}
            </Heading>
            <Heading
              as="h3"
              fontSize={['lg', 'lg', '2xl', '2xl', '2xl']}
              textTransform="uppercase"
              color="orange.500"
              bg="white"
              width="fit-content"
              paddingX={['24px', '24px', '30px', '30px', '30px']}
              paddingY={['8px', '8px', '14px', '14px', '14px']}
            >
              {captions[currentSlide].subtitle}
            </Heading>
          </>
        )}
      </Flex>
      
      <Flex 
        position="absolute" 
        width="100%" 
        justifyContent="space-between" 
        top="50%" 
        transform="translateY(-50%)"
        zIndex={2}
        px={4}
      >
        <IconButton
          aria-label="Previous slide"
          icon="chevron-left"
          variant="ghost"
          color="white"
          fontSize="3xl"
          onClick={handlePrev}
          _hover={{ bg: 'rgba(0,0,0,0.3)' }}
        />
        <IconButton
          aria-label="Next slide"
          icon="chevron-right"
          variant="ghost"
          color="white"
          fontSize="3xl"
          onClick={handleNext}
          _hover={{ bg: 'rgba(0,0,0,0.3)' }}
        />
      </Flex>
      
      <Flex 
        position="absolute" 
        bottom="20px" 
        width="100%" 
        justifyContent="center"
        zIndex={2}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            width="10px"
            height="10px"
            borderRadius="50%"
            bg={index === currentSlide ? "orange.500" : "white"}
            mx="4px"
            cursor="pointer"
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Flex>
    </Box>
  )
}

export default Carousel 