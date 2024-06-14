import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to BossWrld</Heading>
        <Text fontSize="lg">Discover the epitome of luxury and modern fashion.</Text>
        <Button as={Link} to="/collection" colorScheme="teal" size="lg">Explore Collection</Button>
      </VStack>
    </Container>
  );
};

export default Index;