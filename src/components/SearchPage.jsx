import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  Button,
  VStack,
  HStack,
  Heading,
  Container,
  Badge,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

const ProductCard = ({ discount, title, price, rating, company, image }) => (
  <Box
    position="relative"
    height={{ base: "auto", md: "300px" }}
    borderRadius="16px"
    boxShadow="-4px -4px 16px 0px rgba(229, 184, 138, 0.1), 4px 4px 16px 0px rgba(194, 84, 82, 0.1)"
    bg="#e1e5e1"
    p={4}
    display="flex"
    flexDirection="column"
    alignItems="center"
    color="#211b18"
    fontWeight="bold"
    marginTop={{ base: "100px", md: "35px" }}
  >
    <Image
      src={image}
      alt={title}
      position="absolute"
      top={{ base: "-60px", md: "-100px" }}
      left="50%"
      transform="translate(-50%, -24%)"
      width={{ base: "60%", md: "90%" }}
      height="auto"
      objectFit="contain"
    />
    <Badge
      borderRadius="7px"
      boxShadow="0px 0px 8px 0px rgba(244, 125, 74, 0.25)"
      bg="#f47d4a"
      color="#f2f7f2"
      p={2}
      alignSelf="flex-start"
      fontSize={{ base: "12px", md: "15px" }}
      fontFamily="Apfel Grotezk, sans-serif"
      mt={{ base: "40px", md: "70px" }}
    >
      {discount}% OFF
    </Badge>
    <Text
      fontSize={{ base: "16px", md: "20px" }}
      fontWeight="500"
      fontFamily="General Sans Variable, -apple-system, Roboto, Helvetica, sans-serif"
      mt={2}
    >
      {title}
    </Text>
    <Text color="#f47d4a" fontSize={{ base: "20px", md: "24px" }} fontFamily="Apfel Grotezk, sans-serif" mt={2}>
      ${price}
    </Text>
    <HStack mt={2}>
      <Box w={{ base: "60px", md: "110px" }} h={{ base: "14px", md: "23px" }} bgSize="contain" bgRepeat="no-repeat">
        <Image src="/Group 75.svg" width="100%" height="100%" />
      </Box>
      <Text fontFamily="Apfel Grotezk, sans-serif" fontSize={{ base: "12px", md: "16px" }}>({rating})</Text>
    </HStack>
    <Text
      fontSize={{ base: "12px", md: "14px" }}
      fontWeight="500"
      fontFamily="General Sans Variable, -apple-system, Roboto, Helvetica, sans-serif"
      mt={2}
    >
      {company}
    </Text>
  </Box>
);

const SearchPage = () => {
  const products = [
    {
      discount: 10,
      image: "/chai1.svg",
      title: "Luxury Chair",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd"
    },
    {
      discount: 10,
      image: "/chair2.svg",
      title: "Centre Table",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd"
    },
    {
      discount: 10,
      image: "/chair3.svg",
      title: "Chaise Lounge",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd"
    },
    {
      discount: 10,
      image: "/chair4.svg",
      title: "Bar Stool",
      price: 100,
      rating: 572,
      company: "Ayal Production Ltd"
    },
  ];

  return (
    <Box bg="#f2f7f2" minHeight="100vh">
      <Container maxW="container.xl" py={10}>
        <Flex direction={["column", "row"]}>
          <Box flex={3}>
            <Heading as="h1" size="4xl" color="#f47d4a" mb={7}>
              Search
            </Heading>
            <Text color="#aaaab2" fontSize="20px" fontStyle="normal" fontWeight="500" mb={5}>
              Enter item name/code or keyword
            </Text>
            <Flex mb={5} flexDirection="column" gap="14px">
              <Flex
                direction={["column", "row"]}
                gap="17px"
                alignItems={["flex-start", "center"]}
              >
                <Text fontSize={["24px", "36px"]} fontWeight="500" lineHeight={["36px", "50px"]} mb={[2, 0]}>
                  "Search Term"
                </Text>
                <Input
                  border="none"
                  placeholder="Press Enter to view results"
                  flex={1}
                  w={["100%", "962px"]}
                  fontSize={["16px", "20px"]}
                />
              </Flex>
              <Box width="100%" height="4px" bg="#515062" />
            </Flex>
            <HStack mb={10} flexWrap="wrap">
              <Text>Enter tags :</Text>
              {["Sofa", "Bed", "Table", "Cabinet", "Stool"].map((tag) => (
                <Button key={tag} variant="outline" borderRadius="full">
                  {tag}
                </Button>
              ))}
              <Text textDecoration="underline" cursor="pointer">More Categories</Text>
            </HStack>
            <Heading as="h2" size="lg" color="#9a9d9a" mb={5}>
              Our Recommendations
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5} mt={{ base: "120px", md: "120px" }}>
              {products.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default SearchPage;