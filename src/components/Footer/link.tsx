import React from 'react'
import { Box, Icon, Link } from '@chakra-ui/react'
import { useState } from 'react'
export default function Links({icon, href, children, h="50px", w="50px", hoverColor="gray.300"}:any){
    const [hover, setHover] = useState(false);
    function handleMouseEnter(){
        setHover(true);
    }
    function handleMouseLeave(){
        setHover(false);
    }
    return(
        <Link href={href} target="_blank">
        <Box margin="3" cursor="pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Icon as={icon} w={w} h={w} color={hover ? hoverColor : ""}/>
            <Box textAlign="center">{children}</Box>
        </Box>
        </Link>
    )
}