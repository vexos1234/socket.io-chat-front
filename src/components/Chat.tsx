import React from 'react'
import {
  HStack,
  VStack,
  Input,
  Box,
  IconButton,
} from '@chakra-ui/react'
import '../styles.css'
import Messages from './Messages';
import { FaPaperPlane } from 'react-icons/fa';

function Chat() {

  return (
    <Box display="flex">
      <VStack>
        <Box style={{ width: '120vh' }}>
          <Messages />
        </Box>
        <HStack>
          <Input
            placeholder="Type a message..."
            borderRadius="20px"
            flex="1"
            mr="2"
            py="2"
            px="4"
            style={{ width: '140vh' }}
          />
          <IconButton
            icon={<FaPaperPlane />}
            aria-label="Send"
            colorScheme="blue"
            borderRadius="20px"
          />
        </HStack>
      </VStack>
    </Box>
  )
}

export default Chat