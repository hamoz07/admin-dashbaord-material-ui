import React from "react";
import DescR from "../global/DescRibe.jsx";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";

import "./new-user.css";

export default function NewUser() {
  let selectData = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    setOpen(true);
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const onSubmit = (data) => {
    handleClick();
  };

  return (
    <Box style={{ padding: "20px" }}>
      <DescR title={"Create User"} subTitle={"Create a New User Profile "} />
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
            error={errors.firstName}
            helperText={
              errors.firstName &&
              "this field is required & minumum 3 characters"
            }
            {...register("firstName", {
              required: true,
              minLength: 3,
            })}
            id="filled-basic"
            label="First Name"
            variant="filled"
            style={{ flexGrow: 1 }}
          />
          <TextField
            error={errors.lastName}
            helperText={
              errors.lastName && "this field is required & minumum 3 characters"
            }
            {...register("lastName", {
              required: true,
              minLength: 3,
            })}
            id="filled-basic"
            label="Last Name"
            variant="filled"
            style={{ flexGrow: 1 }}
          />
        </Stack>
        <TextField
          id="filled-basic"
          error={errors.mail}
          helperText={errors.mail && "Enter a Valid Email Address"}
          {...register("mail", {
            required: "Email Address is required",
            pattern: /\w+@\w+\.\w+/i,
          })}
          label="Email"
          variant="filled"
        />
        <TextField
          id="filled-basic"
          error={errors.contact}
          helperText={errors.contact && "Enter a Valid Phone Number"}
          {...register("contact", {
            required: "Email Address is required",
            pattern: /\d{6,}/i,
          })}
          label="Contact Number"
          variant="filled"
        />

        <TextField id="filled-basic" label="Address 1" variant="filled" />
        <TextField id="filled-basic" label="Address 2" variant="filled" />
        <TextField
          variant="filled"
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
        >
          {selectData.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ textAlign: "right" }}>
          <Button
            type="submit"
            variant="contained"
            style={{ textTransform: "capitalize" }}
          >
            create new user
          </Button>

          <Snackbar
            open={open}
            autoHideDuration={6000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleClose}
            sx={{ textAlign: "right" }}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              new user created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </Box>
  );
}
