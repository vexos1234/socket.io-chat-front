import React from 'react';
import { Box, Avatar, Text } from '@chakra-ui/react';

interface MessageProps {
    text: string;
    isSender: boolean;
}

const Message: React.FC<MessageProps> = ({ text, isSender }) => {
    const containerStyles: React.CSSProperties = {
        display: 'flex',
        flexDirection: isSender ? 'row-reverse' : 'row',
        alignItems: 'flex-end',
        marginBottom: '8px',
    };

    const bubbleStyles: React.CSSProperties = {
        background: isSender ? '#0084ff' : '#f0f0f0',
        color: isSender ? '#fff' : '#000',
        borderRadius: '16px',
        padding: '12px',
        maxWidth: '70%',
    };

    return (
        <Box style={containerStyles}>
            {!isSender && (
                <Avatar
                    name="Sender Name"
                    size="sm"
                    src="https://via.placeholder.com/30"
                    marginRight="8px"
                />
            )}
            <Box style={bubbleStyles}>
                <Text fontSize="md">{text}</Text>
            </Box>
        </Box>
    );
};

const Messages: React.FC = () => {
    const messages = [
        { id: 1, text: 'Hello!', isSender: true },
        { id: 2, text: 'Hi there!', isSender: false },
        { id: 3, text: 'How are you?', isSender: true },
        { id: 4, text: 'Hello', isSender: true },
        { id: 5, text: 'Bye', isSender: true },
        // Add more messages here
    ];

    return (
        <Box>
            {messages.map((message) => (
                <Message key={message.id} text={message.text} isSender={message.isSender} />
            ))}
        </Box>
    );
};

export default Messages;