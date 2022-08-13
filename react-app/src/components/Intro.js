import { Paper, Typography } from '@material-ui/core'
import  Box  from '@material-ui/core/Box'

const Intro = () => {
    return (
         <Paper elevation={4}>
             <Box m={0.5}>
                 <Typography m={3} variant="subtitle1" gutterBottom>
                 This is a sample app developed to demonstrate protecting APIs with Azure AD B2C
                 </Typography>
             </Box>
         </Paper>
    )
}

export default Intro