import {
  Breadcrumbs,
  Button,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { materialCommonStyles } from "../../utils/materialCommonStyles";
import { createAccountStyle } from "./style";

const Register = () => {
  const roleList = [
    { id: 2, name: "buyer" },
    { id: 3, name: "seller" },
  ];

  const classes = createAccountStyle();
  const materialClasses = materialCommonStyles();

  return (
    <div className={classes.createAccountWrapper}>
      <div className="create-account-page-wrapper">
        <div className="container">
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            className="breadcrumb-wrapper"
          >
            <Link color="inherit" href="/" title="Home">
              Home
            </Link>
            <Typography color="textPrimary">Create an Account</Typography>
          </Breadcrumbs>

          <Typography variant="h1">Login or Create an Account</Typography>
          <div className="create-account-row">
            {/* <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => ( */}
            <form>
              <div className="form-block">
                <div className="personal-information">
                  <Typography variant="h2">Personal Information</Typography>
                  <p>
                    Please enter the following information to create your
                    account.
                  </p>
                  <div className="form-row-wrapper">
                    <div className="form-col">
                      <TextField
                        id="first-name"
                        name="firstName"
                        label="First Name *"
                        variant="outlined"
                        inputProps={{ className: "small" }}
                        // onBlur={handleBlur}
                        // onChange={handleChange}
                      />
                      {/* <ValidationErrorMessage
                        message={errors.firstName}
                        touched={touched.firstName}
                      /> */}
                    </div>
                    <div className="form-col">
                      <TextField
                        // onBlur={handleBlur}
                        // onChange={handleChange}
                        id="last-name"
                        name="lastName"
                        label="Last Name *"
                        variant="outlined"
                        inputProps={{ className: "small" }}
                      />
                      {/* <ValidationErrorMessage
                        message={errors.lastName}
                        touched={touched.lastName}
                      /> */}
                    </div>
                    <div className="form-col">
                      <TextField
                        // onBlur={handleBlur}
                        // onChange={handleChange}
                        id="email"
                        name="email"
                        label="Email Address *"
                        variant="outlined"
                        inputProps={{ className: "small" }}
                      />
                      {/* <ValidationErrorMessage
                        message={errors.email}
                        touched={touched.email}
                      /> */}
                    </div>
                    <div className="form-col">
                      <FormControl
                        className="dropdown-wrapper"
                        variant="outlined"
                      >
                        <InputLabel htmlFor="select">Roles</InputLabel>
                        <Select
                          name="roleId"
                          id={"roleId"}
                          inputProps={{ className: "small" }}
                          //   onChange={handleChange}
                          className={materialClasses.customSelect}
                          MenuProps={{
                            classes: {
                              paper: materialClasses.customSelect,
                            },
                          }}
                          //   value={values.roleId}
                        >
                          {roleList.length > 0 &&
                            roleList.map((role) => (
                              <MenuItem value={role.id} key={"name" + role.id}>
                                {role.name}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
                <div className="login-information">
                  <Typography variant="h2">Login Information</Typography>

                  <div className="form-row-wrapper">
                    <div className="form-col">
                      <TextField
                        // onBlur={handleBlur}
                        // onChange={handleChange}
                        id="password"
                        type="password"
                        name="password"
                        label="Password *"
                        variant="outlined"
                        inputProps={{ className: "small" }}
                      />
                      {/* <ValidationErrorMessage
                        message={errors.password}
                        touched={touched.password}
                      /> */}
                    </div>
                    <div className="form-col">
                      <TextField
                        type="password"
                        // onBlur={handleBlur}
                        // onChange={handleChange}
                        id="confirm-password"
                        name="confirmPassword"
                        label="Confirm Password *"
                        variant="outlined"
                        inputProps={{ className: "small" }}
                      />
                      {/* <ValidationErrorMessage
                        message={errors.confirmPassword}
                        touched={touched.confirmPassword}
                      /> */}
                    </div>
                  </div>
                  <div className="btn-wrapper">
                    <Button
                      className="pink-btn btn"
                      variant="contained"
                      type="submit"
                      color="primary"
                      disableElevation
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </form>
            {/* )}
            </Formik> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
