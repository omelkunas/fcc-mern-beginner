import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ProductCard({ product }) {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");

  const onOpen = () => {};
  const handleDelete = () => {};

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "x1" }}
      bg={bg}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="x1" color={textColor} md={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDelete(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>
    </Box>
  );
}
