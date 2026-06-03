import { useTheme } from "@emotion/react";
import ProgressCircle from "./ProgressCircle";
import { tokens } from "../Theme";
import { Box, Typography } from "@mui/material";

function StateBox({title ,subtitle,icon,progress,increase}) {
    const theme =useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box sx={{width:'100%' , m:"0 30px"}}>
        <Box sx={{display:'flex' , justifyContent:'space-between',}}>
            <Box>
                {icon}
                <Typography variant="h4" sx={{fontWeight:'bold' , color:colors.grey[100]}}>
                    {title}
                </Typography>
            </Box>
            <Box>
                <ProgressCircle progress={progress}/>
            </Box>
            </Box>
            <Box sx={{display:'flex' , justifyContent:'space-between',}}>
                <Typography variant="h5" sx={{ color:colors.greenAccent[500]}}>
                    {subtitle}
                </Typography>
                <Typography variant="h5" sx={{fontStyle:'italic' , color:colors.greenAccent[600]}}>
                    {increase}
                </Typography>
            </Box>
        
    </Box> 
  )
}

export default StateBox