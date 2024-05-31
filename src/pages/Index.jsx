import { useState } from "react";
import { Box, Container, VStack, HStack, Input, Button, Text, Avatar, IconButton } from "@chakra-ui/react";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "You" }]);
      setInputValue("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%" padding={4} bg="teal.500" color="white" borderRadius="md">
          <Avatar icon={<FaUserCircle />} />
          <Text fontSize="xl" fontWeight="bold">
            Chat App
          </Text>
        </HStack>
        <Box width="100%" flex="1" overflowY="auto" padding={4} border="1px" borderColor="gray.200" borderRadius="md">
          {messages.map((message, index) => (
            <HStack key={index} justify={message.sender === "You" ? "flex-end" : "flex-start"} marginY={2}>
              <Box bg={message.sender === "You" ? "teal.100" : "gray.100"} padding={3} borderRadius="md">
                <Text>{message.text}</Text>
              </Box>
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSendMessage} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
