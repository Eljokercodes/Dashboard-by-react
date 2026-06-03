import { Typography,Box,useTheme } from "@mui/material"
import { tokens } from "../Theme"





function Header({title,subtitle}) {
    const theme =useTheme();
    const colors=tokens(theme.palette.mode)
  return (
    <Box sx={{mb:'30px',fontWeight: 'bold !important'}}>
        <Typography variant="h2">
            {title}
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}  sx={{mb:'5px'}}>
            {subtitle}
        </Typography>
    </Box>
  )
}


export default Header