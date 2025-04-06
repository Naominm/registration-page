import { useState } from "react";
import { Box, Typography, TextField, Paper, Button} from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import image from "../src/assets/signup.jpg"

const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif;'
  },
});



function FormData() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const notify = () => toast("Passwords do not match.");
  const success = () => toast("Account Created Successfully");

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  if (password !== confirmPassword) {
    notify();
    return;
  }
  success()

  setFirstName("");
  setLastName("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");
  }
  return (
    <div>
        <ThemeProvider theme={theme}>
        <ToastContainer />
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
          <form onSubmit={handleSubmit}>

          <TextField
            label="First Name"
            name="First Name"
            margin="normal"
            size="small"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="last Name"
            name="last Name"
            margin="normal"
            size="small"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="Email Address"
            name="Email Address"
            margin="normal"
            type="email"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="Password"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            size="small"
            fullWidth
            required
          />
          <TextField
            label="Confirm Password"
            name="Confirm Password"
            margin="normal"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            size="small"
            fullWidth
            required
          />
          
          <Button type="submit" variant="contained" sx={{ mt: "1rem", padding:1.5,width:"100%", fontWeight:"bold", borderRadius:"10px"}}>Register</Button>
          </form>
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