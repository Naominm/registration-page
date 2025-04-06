import { Box, Typography, TextField,Paper } from "@mui/material"
import image from "../src/assets/signup.jpg"

function FormData() {
  return (
    <div>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        gap:"2rem",
      }}>
     
      
        <Paper elevation={5}   sx={{ mt: 1,
         width: "50%",
         display:"flex",
         flexDirection:"column",
         alignItems:"center",
         padding:"2rem"
         
         }}>
        <Box sx={{display:"flex", gap:"2rem"}}>
        <TextField
            label="First Name"
            name="First Name"
            margin="normal"
            required
          />
            <TextField
            label="last Name"
            name="last Name"
            margin="normal"
            required
          />
        </Box>
         
            <TextField
            label="Email Address"
            name="Email Address"
            margin="normal"
            type="Email"
            required
          />
             <TextField
            label="Email Address"
            name="Email Address"
            margin="normal"
            type="Email"
            required
          />
             <TextField
            label="Email Address"
            name="Email Address"
            margin="normal"
            type="Email"
            required
          />
          <button>login</button>
          </Paper>
          <Box
      component="img"
      src={image}
      sx={{
        width:"500px",
        height:"400px",
        borderRadius:2,
        boxShadow:3
      }

      }

      />
        </Box>

    </div>
  )
}

export default FormData;