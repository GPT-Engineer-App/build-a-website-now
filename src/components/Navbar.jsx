import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="gray.800" color="white" px={4} py={2}>
    <Flex justify="space-between" align="center">
      <Link as={NavLink} to="/" fontSize="xl" fontWeight="bold" _hover={{ textDecoration: "none" }}>
        BossWrld
      </Link>
      <Flex>
        <Link as={NavLink} to="/collection" mx={2} _hover={{ textDecoration: "none" }}>
          Collection
        </Link>
        <Link as={NavLink} to="/terms-of-service" mx={2} _hover={{ textDecoration: "none" }}>
          Terms of Service
        </Link>
        <Link as={NavLink} to="/contact" mx={2} _hover={{ textDecoration: "none" }}>
          Contact
        </Link>
      </Flex>
    </Flex>
  </Box>
);

export default Navbar;