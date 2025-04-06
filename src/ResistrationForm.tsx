import { Box, Typography, TextField } from "@mui/material"

function FormData() {
  return (
    <div>
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: "2px solid red"
      }}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" sx={{ mt: 1, width: "100%" }}>
          <TextField
            label="First Name"
            name="First Name"
            fullWidth
            margin="normal"
            required
          />
            <TextField
            label="last Name"
            name="last Name"
            fullWidth
            margin="normal"
            required
          />
        </Box>
      </Box>
    </div>
  )
}

export default FormData;