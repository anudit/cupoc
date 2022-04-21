import React from 'react'
import { Button, chakra, Flex, Heading, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <Flex height="60px" width="100%" flexDirection="row" justifyContent="space-between" alignItems="center" px={4} py={2} borderBottomColor="black" borderBottomWidth={1}>
          <Text as="h1" fontSize={{base: "md", md:"20px"}} fontWeight={400} color="black" _hover={{fontWeight:800, fontStyle: "italic"}}>CUPOC, Inc.</Text>
          <Flex flexDirection="row" justifyContent="center" alignItems="center">
            <Link passHref={true} href="https://blog.cupoc.space/">
              <Text as="a" target="_blank" cursor="pointer" mx={2} _hover={{textDecoration: "underline", textDecorationThickness: "2px"}}>Blog</Text>
            </Link>
            <Link passHref={true} href="https://github.com/anudit/cupocbrand/">
              <Text as="a" target="_blank" cursor="pointer" mx={2} mr={4} _hover={{textDecoration: "underline", textDecorationThickness: "2px"}}>Brand</Text>
            </Link>
            <Link href="/careers" passHref={true}>
              <Button fontWeight={400} _hover={{backgroundColor: "#000", color: "white"}} borderColor="black" borderWidth={1} borderRadius="100px" px="20px" py="10px">
                Join Us
              </Button>
            </Link>
          </Flex>
        </Flex>
    )
}
