import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CssBaseline, CssVarsProvider, Box} from "@mui/joy";
import theme from "./components/ui/Theme";
import MenuBar from "@/app/components/ui/MenuBar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head />
        <body>
        <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Box
                sx = {{
                    paddingBottom: "10vh"
                }}
            >

            </Box>
            <MenuBar />
        </CssVarsProvider>
        {children}
        </body>
        </html>
    );
}
