"use client"
import { Grid, Heading, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion';

export function CardGrid({ title, children, asGrid = true }: {
  title?: string;
  children?: any;
  asGrid?: boolean
}) {
  return (
    <>
      {title &&
        <Heading mt={20} mb={12}>{title}</Heading>
      }
      {asGrid ?
        <SimpleGrid
          // templateColumns={{ base: 'repeat(auto-fill, 320px)' }} // 动态列
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} // 动态列
          gap={6} // 间距
          autoFlow={"row dense"} // 默认将行填充满
          autoRows={'300px'} // 默认行高
          // justifyContent={'space-between'}
          as={motion.div}
        // animate="open"
        // variants={{
        //   open: {
        //     transition: { staggerChildren: 0.1, delayChildren: 1 }
        //   },
        // }}
        >
          {children}
        </SimpleGrid>
        :
        children
      }
    </>
  )
}