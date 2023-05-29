import React, { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { isColorTheme } from '../colorThemeStore'

export default function ToggleColorMode() {
    const [state, setState] = React.useState<string | null>(null);
    useEffect(()=>{
        setState(localStorage.getItem("chakra-ui-color-mode"));
    }, [state]);
    const colorMode = useStore(isColorTheme);
    const handleChange = ()=>{
        isColorTheme.set(!colorMode);
        state === "dark" ? setState("light") : setState("dark");
    }
    return(
    <li onClick={handleChange}>
        <a>
        <img width="24" height="24" src={state === "dark" ? "moon.svg" : "sun.svg"}/>
        </a>
    </li>
    )
}