'use client'
import {
    Stack,
    Typography,
    Card
} from "@mui/joy";

import {
    CardContent,
    CardMedia
} from "@mui/material";
import Link from "next/link";

export default function ProjectCard({link, title, year, description, imageUrl}) {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Card
                sx={{
                    width: { sm: "500px", md:"800px" },
                    height: {sm :"800px", md: "400px"},
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                        transform: "scale(1.05)",
                        backgroundColor: "neutral.300",
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                    },
                    borderRadius: 30,
                    flexDirection: { sm: "column", md: "row" }, // Change direction based on screen size
                }}
            >
                <CardContent
                    sx = {{
                        flex: "1 0 auto",
                    }}
                >
                    <Stack
                        spacing={4}
                        sx = {{
                            flexDirection: { sm: "column", md: "row" },
                        }}
                    >
                        <Stack
                            sx = {{
                                width: { sm:"390px", md:"450px"} ,
                                paddingTop: 4,
                                paddingLeft: 4
                            }}
                        >

                            <Typography level="h1">{title}</Typography>

                            <Typography
                                level="body-lg"
                                fontWeight="bold"
                            >
                                {year}
                            </Typography>
                            <Typography
                                level="body-sm"
                                fontWeight="bold"
                                sx = {{
                                    paddingTop: "3vh",
                                }}
                            >
                                {description}
                            </Typography>
                        </Stack>
                        <Stack>
                            <CardMedia
                                component="img"
                                image={imageUrl}
                                alt="happy dino"
                                sx={{
                                    width: "250px",
                                    height: "250px" ,
                                    objectFit: "contain",
                                    alignSelf: "center",
                                }}
                            />
                        </Stack>

                    </Stack>
                </CardContent>
            </Card>


        </Link>
    )
}