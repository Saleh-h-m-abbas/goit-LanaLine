import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import {
  Button,
  Card,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Formik } from "formik";
import { addUserSchema } from "../validation/Validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
const UsersAdd = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "", role: "" }}
      validationSchema={addUserSchema}
      onSubmit={async (values, { setSubmitting }) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user.uid);
            await addDoc(collection(db, "users"), {
              email: user.email,
              uid: user.uid,
              username: values.username,
              role: values.role,
              createdAt: serverTimestamp(),
            });
            values.username = "";
            values.email = "";
            values.password = "";
            values.role = "";
            setSubmitting(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} style={{ padding: "18px" }}>
          <Card padding={3} elevation={3}>
            <Grid container spacing={2} padding={3}>
              <Grid item xs={12}>
                <Item
                  style={{
                    backgroundColor: "#A5A3A3",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                >
                  <label>Add New Users</label>
                </Item>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.username && touched.username}
                  fullWidth
                  helperText={
                    !errors.username || !touched.username ? "" : errors.username
                  }
                  name="username"
                  id="username"
                  type={"text"}
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Username"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.email && touched.email}
                  fullWidth
                  helperText={
                    !errors.email || !touched.email ? "" : errors.email
                  }
                  name="email"
                  id="email"
                  type={"text"}
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={errors.password && touched.password}
                  fullWidth
                  helperText={
                    !errors.password || !touched.password ? "" : errors.password
                  }
                  name="password"
                  id="password"
                  type="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="role-simple-select-label">Role*</InputLabel>
                  <Select
                    labelId="role-simple-select-label"
                    id="role-simple-select"
                    value={values.role}
                    label="Role"
                    name="role"
                    onChange={handleChange}
                    error={errors.role && touched.role}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0}>Root</MenuItem>
                    <MenuItem value={1}>Admin</MenuItem>
                    <MenuItem value={2}>User</MenuItem>
                  </Select>
                  {errors.role && touched.role ? (
                    <FormHelperText
                      sx={{ color: "#bf3333", marginLeft: "16px !important" }}
                    >
                      {!errors.role || !touched.role ? "" : errors.role}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button
                  style={{
                    backgroundColor: "#f48fb1",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                  fullWidth
                  type="submit"
                  variant="contained"
                  endIcon={<AddIcon />}
                >
                  Add User
                </Button>
              </Grid>
            </Grid>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default UsersAdd;
