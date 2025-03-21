"use client";

import {
    CssVarsProvider,
    CssBaseline,
    Stack,
    Typography,
} from "@mui/joy";
import Theme from "./components/ui/Theme";

import ProjectCard from "@/app/components/ViewProject/ProjectCard";


export default function Home() {
    return (
        <CssVarsProvider theme={Theme}>
            <CssBaseline/>

            <Stack
                spacing={2}
                direction="column"
                sx={{
                    justifyContent: "center",
                    width: "80vw",
                    margin: "auto",
                    paddingTop: "10vh",
                    alignItems: "center",
                    paddingBottom: "10vh"
                }}
            >
                <Typography
                    level="h1"
                    sx={{
                        background: Theme.palette.mode === "dark"
                            ? "linear-gradient(90deg, #8a2be2, #1e90ff)"  // Purple → Blue (Dark Mode)
                            : "linear-gradient(90deg, #6a11cb, #2575fc)",  // Purple → Blue (Light Mode)
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "bold"
                    }}
                >
                    Hello I'm Yi He
                </Typography>
                <Typography
                    level="h2"
                    sx={{
                        background: Theme.palette.mode === "dark"
                            ? "linear-gradient(90deg, #888888, #1a1a1a)"
                            : "linear-gradient(90deg, #aaaaaa, #555555)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "bold",
                        width: { sm: "500px", md:"800px" },
                    }}

                >
                    currently year 2 studying comp sci at NUS.
                </Typography>
                <ProjectCard
                    link={"https://oneBoz.github.io/dino"}
                    title={"Dino"}
                    description={"My first web game project inspired by the google dinosaur game. Completed before school started."}
                    imageUrl={"dinoJump0000.png"}
                    year={"2021"}
                />


            </Stack>
        </CssVarsProvider>
    )
}