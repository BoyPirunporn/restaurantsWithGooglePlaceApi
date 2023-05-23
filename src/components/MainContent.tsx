import { Box } from '@mui/material'
import React from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

const MainContent: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <Box
            sx={{
                marginTop: 3,
                paddingLeft: {
                    md: "120px",
                    sm: "13px",
                    xs: "13px"
                },
                paddingRight: {
                    md: "35px",
                    sm: "13px",
                    xs: "13px"
                },
            }}
        >{props.children}</Box>
    )
}

export default MainContent