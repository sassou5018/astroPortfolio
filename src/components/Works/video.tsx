import React from 'react'
import { Box, Heading, HStack, Image, Tag, Text, Tooltip, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import ReactPlayer from 'react-player';
export default function Article({title, description, url, link, tag}: any){
    const [noOfLines, setNoOfLines] = useState(3);
    const [hover, setHover] = useState(false);
    function handleExpand(){
        setNoOfLines((prev)=>prev===3 ? 0 : 3);
    }
    function handleMouseEnter(){
        setHover(true);
    }
    function handleMouseLeave(){
        setHover(false);
    }
    return(
        <VStack margin="1" minW="450" minH="300" maxW="450" bg={hover ? "gray.300" : "gray.400"} p={hover ? "3" : "5"} borderRadius="2xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Box>
                <ReactPlayer url={url} width="350" height="150" controls />
            </Box>
            <HStack w="350px">
                <Heading as="h5" size="md">{title}</Heading>
                <HStack>
                    <Tag variant="subtle" colorScheme="blue" borderRadius="full">{tag}</Tag>
                </HStack>
            </HStack>
            <Box cursor="default" w="350px">
                <Tooltip label={noOfLines===3 ? "Show More" : "Show Less"} placement="bottom"><Text noOfLines={noOfLines} onClick={handleExpand}>{description}</Text></Tooltip>
            </Box>
        </VStack>
    )
}