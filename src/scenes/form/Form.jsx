import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup";

import Header from "../../components/Header";

const phoneRegExp = /^01[0125][0-9]{8}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone Number Is Not Valid")
    .required("Required"),
  address1: yup.string().required("Required"),
  address2: yup.string().required("Required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

function Form() {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Box m="20px">
      <Header
        title="CREATE USER"
        subtitle="Create a New User Profile"
      />

      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleFormSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{display:"grid",gap:"30px",gridTemplateColumns:"repeat(4, minmax(0, 1fr))"}} 
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.firstName && errors.firstName
                )}
                helperText={
                  touched.firstName && errors.firstName
                }
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.lastName && errors.lastName
                )}
                helperText={
                  touched.lastName && errors.lastName
                }
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.email && errors.email
                )}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                name="contact"
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.contact && errors.contact
                )}
                helperText={
                  touched.contact && errors.contact
                }
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                name="address1"
                value={values.address1}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.address1 && errors.address1
                )}
                helperText={
                  touched.address1 && errors.address1
                }
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                name="address2"
                value={values.address2}
                onChange={handleChange}
                onBlur={handleBlur}
                error={Boolean(
                  touched.address2 && errors.address2
                )}
                helperText={
                  touched.address2 && errors.address2
                }
                sx={{ gridColumn: "span 4" }}
              />
            </Box>

            <Box
              display="flex"
              justifyContent="end"
              mt="20px"
            >
              <Box
              sx={{display:'flex' ,justifyContent:'end' ,mt:'20px'}}
              >
                <Button
                type="submit"
                color="secondary"
                variant="contained"
                
              >
                Create New User
              </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Form;