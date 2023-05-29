import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import { useStore } from '@nanostores/react'
import { isColorTheme } from '../colorThemeStore'
export default function ColorProvider() {
    const [state, setState] = React.useState<boolean>(true);
    const colorMode = useStore(isColorTheme);
    const { colorMode: theme, toggleColorMode } = useColorMode();
    if(colorMode !== state){
        setState(colorMode);
        toggleColorMode();
    }
    return(
        <></>
    )
}