import React from 'react'
import { Box, Button, Heading, HStack, Image, Link, Tag, Text, Tooltip, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import IconLink from "../../components/Footer/link";
import {AiFillGithub} from 'react-icons/ai'
export default function Article({title, description, image, link, tag, isLive = false, github = ""}: any){
    const [noOfLines, setNoOfLines] = useState(3);
    const [hover, setHover] = useState(false);
    const handleNoImage = (e:any)=>{
        e.target.src = "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
    }
    function handleExpand(){
        setNoOfLines((prev)=>prev===3 ? 0 : 3);
    }
    function handleMouseEnter(){
        setHover(true);
    }
    function handleMouseLeave(){
        setHover(false);
    }
    let tagsElem;
    if(Array.isArray(tag) && tag.length>0){
        tagsElem = tag.map((tag: string, index: number)=>{
            return(
                <Tag variant="subtle" colorScheme="blue" borderRadius="full" key={index}>{tag}</Tag>
            )
        })
    }
    return(
        <VStack margin="1" minH="300" maxW="450" bg={hover ? "gray.300" : "gray.400"} p={hover ? "3" : "5"} borderRadius="2xl" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} cursor="pointer">
            <Box>
                <Link href={link} target="_blank">
                <Image onError={handleNoImage} borderRadius="md" w="md" h="150px" fit="cover" alt="Article ThumbNail" src={image} />
                </Link>
            </Box>
            <Link href={link} target="_blank">
            <HStack w="full">
                <Heading as="h5" size="md">{title}</Heading>
                <HStack wrap="wrap">
                {isLive ? <Tag variant="subtle" colorScheme="green" borderRadius="full">Live</Tag> : null}
                    { Array.isArray(tag) ? tagsElem :
                        <Tag variant="subtle" colorScheme="blue" borderRadius="full">{tag}</Tag>
                    }
                </HStack>
            </HStack>
            </Link>
            <Box w="full">
                <Tooltip label={noOfLines===3 ? "Show More" : "Show Less"} placement="bottom"><Text noOfLines={noOfLines} onClick={handleExpand}>{description}</Text></Tooltip>
            </Box>
            <HStack  w="full" spacing="3">
            {github.length > 0 ? <IconLink icon={AiFillGithub} href={github} h="20px" w="20px" hoverColor="blue"></IconLink> : null}
            </HStack>
        </VStack>
    )
}