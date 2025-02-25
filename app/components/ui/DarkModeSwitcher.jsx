'use client'

import * as React from 'react';
import {useColorScheme} from '@mui/joy/styles';
import {IconButton} from "@mui/joy";
import {DarkModeRounded, LightModeRounded} from "@mui/icons-material";

const DarkModeSwitcher = (props) => {
    const {onClick, sx, ...other} = props;
    const {mode, setMode} = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return (
            <IconButton
                size="sm"
                variant="solid"
                color="neutral"
                {...other}
                sx={sx}
                disabled
            />
        );
    }

    return (
        <IconButton
            id="toggle-mode"
            size="sm"
            variant="soft"
            color="neutral"
            {...props}
            onClick={(event) => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
                onClick?.(event);
            }}
            sx={[
                {
                    '& > *:first-of-type': {
                        display: mode === 'dark' ? 'none' : 'initial',
                    },
                    '& > *:last-of-type': {
                        display: mode === 'light' ? 'none' : 'initial',
                    },
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
        >
            <DarkModeRounded/>
            <LightModeRounded/>
        </IconButton>
    );
}

export default DarkModeSwitcher;