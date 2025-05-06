import React from 'react'
import Carousel from './carousel'

const Header: React.FC = () => {
  // Using unsplash images since we're just working with placeholders
  const images = [
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1599327286067-66def7c22ded?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  ]

  const captions = [
    {
      title: 'Decoration Ideas',
      subtitle: 'Ideas & Inspirations'
    },
    {
      title: 'Modern Living',
      subtitle: 'Contemporary Designs'
    },
    {
      title: 'Luxury Spaces',
      subtitle: 'Premium Interiors'
    },
    {
      title: 'Minimalist Design',
      subtitle: 'Clean & Elegant'
    }
  ]

  return <Carousel images={images} captions={captions} interval={6000} />
}

export default Header
