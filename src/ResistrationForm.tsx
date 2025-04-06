import { Box, Typography, TextField, Paper, Button } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image from "../src/assets/signup.jpg"

const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif;'
  },
});

function FormData() {
  return (
    <div>
        <ThemeProvider theme={theme}>
      <Typography component="h1" variant="h4" mt={1} sx={{ mb: 3, fontWeight: 'bold' }}>
        Create an Account
      </Typography>
      <Box sx={{
        marginTop: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        gap: "2rem",
      flexDirection: { xs: "column", md: "row" },
      }}>


        <Paper elevation={5} sx={{
          mt: 1,
          width: { xs: "90%", sm: "70%", md: "35%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem",
          borderRadius:"1rem",

        }}>

          <TextField
            variant="outlined"
            label="First Name"
            name="First Name"
            margin="normal"
            size="small"
            fullWidth
            required
          />
          <TextField
            label="last Name"
            name="last Name"
            margin="normal"
            size="small"
            fullWidth
            required
          />

          <TextField
            label="Email Address"
            name="Email Address"
            margin="normal"
            type="email"
            size="small"
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="Password"
            margin="normal"
            type="password"
            size="small"
            fullWidth
            required
          />
          <TextField
            label="Confirm Password"
            name="Confirm Password"
            margin="normal"
            type="password"
            size="small"
            fullWidth
            required
          />
          <Button  type="submit" variant="contained" sx={{ mt: "1rem", padding:1.5,width:"100%", fontWeight:"bold", borderRadius:"10px"}}>Register</Button>
        </Paper>
        <Box
          component="img"
          src={image}
          sx={{
            width: { xs: "100%", md: "40%" },
            height: "430px",
            borderRadius: 2,
          }} />
      </Box>
      </ThemeProvider>
    </div>
  )
}

export default FormData;