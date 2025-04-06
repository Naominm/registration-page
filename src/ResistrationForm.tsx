import { Box, Typography, TextField, Paper, Button } from "@mui/material"
import image from "../src/assets/signup.jpg"

function FormData() {
  return (
    <div>
      <Typography component="h1" variant="h4" mt={3} sx={{ mb: 3, fontWeight: 'bold' }}>
        Create an Account
      </Typography>
      <Box sx={{
        marginTop: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        gap: "2rem"
      }}>


        <Paper elevation={5} sx={{
          mt: 1,
          width: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem"

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
          <Button  type="submit" variant="contained" sx={{ mt: "1rem", padding:1.5,width:"18rem", fontWeight:"bold"}}>Register</Button>
        </Paper>
        <Box
          component="img"
          src={image}
          sx={{
            width: "40%",
            height: "400px",
            borderRadius: 2,
            boxShadow: 1
          }} />
      </Box>

    </div>
  )
}

export default FormData;