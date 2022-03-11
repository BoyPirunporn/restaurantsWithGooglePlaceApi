import { Theme, useMediaQuery } from "@mui/material";

export const MediaQueryScreen = (theme:any) => {
    return useMediaQuery(theme.breakpoints.up('md'));
}