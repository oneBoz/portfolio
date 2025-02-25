'use client'
import * as React from 'react';
import Link from 'next/link';
import DarkModeSwitcher from "./DarkModeSwitcher"
import MenuIcon from "@mui/icons-material/Menu";
import {
    Dropdown,
    MenuButton,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Box
} from "@mui/joy";
import {
    HomeOutlined,
    PersonOutlined
} from "@mui/icons-material";

const MenuBar = () => {
    return (
        <Box
            sx={{
                width: "70vw",
                justifyContent: "center",
                alignItems: "center",
                margin: '0 auto'
            }}
        >
            <Stack
                direction={"row"}
                sx={{
                    width: "70vw",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Dropdown>
                    <MenuButton
                        slots={{ root: IconButton }}
                        slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
                    >
                        <MenuIcon />
                    </MenuButton>
                    <Menu>
                        <MenuItem>
                            <HomeOutlined />
                            <Link href={"/"}>
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <PersonOutlined />
                            <Link href={"/pages/About"}>
                                About
                            </Link>
                        </MenuItem>
                    </Menu>
                </Dropdown>
                <DarkModeSwitcher/>
            </Stack>
        </Box>
    )
}

export default MenuBar;