import React, { useState } from "react";
import { Alert, Box, Button, Snackbar, Stack, TextField } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import FileUpload from "react-material-file-upload";
import emailjs from "@emailjs/browser";

const SUCCESS_MESSAGE = "Succesfully applied! We'll reach out shortly.";
const ERROR_MESSAGE = "Oops! Something went wrong, Please try again later.";

const Apply = () => {
  const [files, setFiles] = useState([]);
  const [noFile, setNoFile] = useState(false);
  const [showSnack, setShowSnack] = useState("");
  const [data, setData] = useState({
    name: {
      value: "",
      error: false,
      errorMessage: "",
    },
    email: {
      value: "",
      error: false,
      errorMessage: "",
      regex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    },
    phone: {
      value: "",
      error: false,
      errorMessage: "",
      regex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    },
  });

  const handleData = (type, value) => {
    setData({
      ...data,
      [type]: {
        ...data[type],
        value,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    Object.keys(data).forEach((item) => {
      if (
        !data[item].value ||
        (data[item].regex && !data[item].value.match(data[item].regex))
      ) {
        isValid = false;
        data[item].error = true;
        data[item].errorMessage = `Please enter a valid ${item}`;
        return;
      }
      data[item].error = false;
      data[item].errorMessage = "";
    });
    if (!files.length) {
      isValid = false;
      setNoFile(true);
      setTimeout(() => setNoFile(false), 5000);
    }
    setData({ ...data });
    if (isValid) {
      emailjs
        .send(
          "service_76ddsb7",
          "template_slfeker",
          {
            ...data,
            file: files[0],
          },
          "rQiJxT-yYhtQm3NY4"
        )
        .then(
          () => {
            setShowSnack(SUCCESS_MESSAGE);
            setTimeout(() => setShowSnack(""), 5000);
          },
          () => {
            setShowSnack(ERROR_MESSAGE);
            setTimeout(() => setShowSnack(""), 5000);
          }
        );
    }
  };

  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Title text={"Interesting to work with us?"} textAlign={"center"} />
      <Paragraph
        text={
          "If you are interested to join our team, please submit the form below. \
                We'll reachout shortly!"
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 1,
          py: 2,
        }}
      >
        <TextField
          margin="normal"
          fullWidth
          error={data.name.error}
          helperText={data.name.errorMessage}
          label="Full Name"
          value={data.name.value}
          onInput={(e) => handleData("name", e.target.value)}
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          error={data.email.error}
          helperText={data.email.errorMessage}
          label="Email Address"
          value={data.email.value}
          onInput={(e) => handleData("email", e.target.value)}
          autoComplete="email"
        />
        <TextField
          margin="normal"
          fullWidth
          error={data.phone.error}
          helperText={data.phone.errorMessage}
          label="Phone Number"
          value={data.phone.value}
          onInput={(e) => handleData("phone", e.target.value)}
          autoComplete="current-phone"
        />
        <Paragraph
          text="Upload your resume and necessary documents"
          color={noFile ? "red" : ""}
          maxWidth="sm"
          mx={1}
          textAlign="center"
        />
        <FileUpload value={files} onChange={setFiles} />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          size="medium"
          sx={{
            fontSize: "0.9rem",
            textTransform: "capitalize",
            py: 2,
            mt: 3,
            mb: 2,
            borderRadius: 0,
            backgroundColor: "#14192d",
            "&:hover": {
              backgroundColor: "#1e2a5a",
            },
          }}
        >
          submit
        </Button>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={showSnack}
      >
        <Alert
          severity={
            showSnack === SUCCESS_MESSAGE
              ? "success"
              : showSnack === ERROR_MESSAGE
              ? "error"
              : ""
          }
          sx={{ width: "100%" }}
        >
          {showSnack}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Apply;
