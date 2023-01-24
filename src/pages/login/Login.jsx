import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { doc } from "firebase/firestore";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Copyright } from "./Copyright";
import gif from "./images/Tabletlogin.gif";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navitage = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const docRef = doc(db, "users", user.uid);
        localStorage.setItem("userInfo", JSON.stringify(docRef));
        dispatch({ type: "LOGIN", payload: user });
        navitage("/");
      })
      .catch((error) => {
        setError(true);
      });
  };

  const theme = createTheme();
  //TODO::Add formik to the code 
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          align="center"
          item
          xs={false}
          sm={4}
          md={7}
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          sx={{
            backgroundRepeat: "no-repeat",
            backgroundColor:'#fff',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img style={{margin: 'auto'}} src={gif} alt="Login" />
        </Grid>
        <Grid item xs={12} sm={8} md={5}  component={Paper} elevation={6} square>
          <Box
          
            sx={{
              my: 12,
              mx: 4,
              mt: 30,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form onSubmit={handleLogin}>
              <Typography
                fontSize={"35px"}
                component="h1"
                variant="h10"
                align="center"
              >
                LanaLine Login
              </Typography>

              <TextField
                margin="normal"
                required
                fullWidth
                autoFocus
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, p: 2 }}
              >
                Login
              </Button>
              {error && <span>Wrong email or password!</span>}
            </form>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
