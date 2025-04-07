import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Paper,
  Button,
  FormControl,
  InputAdornment,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import image from "../src/assets/signup.jpg";

const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif;',
  },
  
});

function FormData() {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const notify = () => toast("Passwords do not match.");
  const success = () => toast("Account Created Successfully");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      notify();
      return;
    }
    success();

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Typography
          component="h1"
          variant="h4"
          mt={1}
          sx={{ mb: 3, fontWeight: "bold" }}
        >
          Create an Account
        </Typography>

        <Box
          sx={{
            marginTop: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Paper
            elevation={1}
            sx={{
              mt: 1,
              width: { xs: "90%", sm: "70%", md: "35%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "2rem",
              borderRadius: "1rem",
            }}
          >
          <form onSubmit={handleSubmit}>
            <FormControl
              variant="standard"
              sx={{ display: "flex", alignItems: "center",justifyContent:"center", gap: "1rem"}}
            >
              <TextField
                id="Your Name"
                label="Name"
                value={Name}
                fullWidth
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  },
                }}
                variant="standard"
              />

              <TextField
                id="Email"
                label="Email Address"
                type="email"
                required
                value={email}
                fullWidth
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  },
                }}
                variant="standard"
              />

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <EnhancedEncryptionIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="password"
                  label="Password"
                  variant="standard"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  fullWidth
                  required
                />
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <EnhancedEncryptionIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="confirm-password"
                  label="Confirm Password"
                  variant="standard"
                  type="password"
                  fullWidth
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  required
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: "1rem",
                  padding: 1.5,
                  width: "100%",
                  fontWeight: "bold",
                  borderRadius: "10px",
                }}
              >
                Register
              </Button>
            </FormControl>
            </form>
          </Paper>

          <Box
            component="img"
            src={image}
            sx={{
              width: { xs: "100%", md: "40%" },
              height: "430px",
              borderRadius: 2,
            }}
          />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default FormData;
