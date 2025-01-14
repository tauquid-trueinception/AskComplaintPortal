"use client";

import {
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Alert,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  MenuItem,
  Select,
  InputLabel,
  Snackbar,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CustomInputField from "../textField";
import CustomButton from "../customButtons";
import { UploadFile } from "@mui/icons-material";
import { SelectChangeEvent } from "@mui/material";
import { useRouter } from "next/navigation";

const Form = () => {
  const theme = useTheme();
  const router = useRouter();

  const [selectedFraud, setSelectedFraud] = useState("");
  const [policeComplaint, setPoliceComplaint] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State to control the snackbar

  
  const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPoliceComplaint(event.target.value);
  };

  const handleButtonClick2 = () => {
    // Trigger the file input click programmatically
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log("Selected files:", files); // Process the uploaded files here

      // Show the snackbar on successful file upload
      setSnackbarOpen(true);

      // Clear the file input after selection (optional)
      event.target.value = "";
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handlePush = () => {
    router.push("/Watsapp");
  };

  const fraudOptions = [
    "Phishing Scams",
    "Unauthorized Transactions",
    "Payment Gateway Fraud",
    "Fake Loan Offers",
    "Credit/Debit Card Fraud",
    "Investment Fraud",
    "E-commerce Fraud",
    "Lottery/Prize Scams",
    "Identity Theft",
    "Job Offer Fraud",
    "Tech Support Scams",
    "Social Media Scams",
    "Insurance Fraud",
    "Fraudulent Loan App",
    "Cyber Extortion",
    "Cryptocurrency Fraud",
    "Online Dating/Relationship Scams",
    "Subscription Fraud",
    "Ponzi Schemes",
    "Fake Government Calls/Emails",
    "Others"
  ];

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedFraud(event.target.value as string);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("mobile")); // For small screens
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log("Selected files:", files);

      // Show success message
      setSuccessMessage("File added successfully!");

      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    }
  };

  return (
    <Stack
      sx={{
        margin: "2rem auto",
        padding: isMobile ? "16px" : "24px",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack gap={2}>
        <CustomInputField label="Name" placeholder="Enter your name" />
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup row defaultValue="female" name="gender">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <CustomInputField
          label="Mobile Number"
          placeholder="Enter your Mobile Number"
          type="number"
        />
        <CustomInputField label="Address" placeholder="Enter your address" />
        <CustomInputField
          label="Pincode"
          placeholder="Enter your pincode"
          type="number"
        />
        <CustomInputField label="City" placeholder="Enter your city" />
        <CustomInputField label="State" placeholder="Enter your state" />
        <CustomInputField
          label="Enter Company Name"
          placeholder="Enter company name"
        />
        <CustomInputField
          label="Enter Fraud Amount"
          placeholder="Enter Fraud Amount"
          startAdornment={"₹"}
        />
        <FormControl fullWidth>
          <InputLabel id="fraud-type-label">Select Fraud Type</InputLabel>
          <Select
            labelId="fraud-type-label"
            id="fraud-type-select"
            aria-placeholder="Select Fraud Type"
            value={selectedFraud}
            onChange={handleChange}
            label="Select Fraud Type"
          >
            {fraudOptions.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {selectedFraud && (
          <Typography
            variant="body2"
            sx={{ marginTop: "0.5rem", color: "text.secondary" }}
          >
            Selected Fraud: {selectedFraud}
          </Typography>
        )}

        <FormControl>
          <FormLabel
            id="police-complaint-label"
            sx={{ marginBottom: "0.5rem" }}
          >
            Have you filed a police complaint?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="police-complaint-label"
            name="police-complaint"
            value={policeComplaint}
            onChange={handleChangeB}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

        {/* Show the button only if "Yes" is selected */}
        {policeComplaint === "Yes" && (
          <>
            <CustomButton
              label="Upload Your FIR"
              variant="outlined"
              color="info"
              startAdornment={<UploadFile />}
              onClick={handleButtonClick2}
            />

            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*,application/pdf" // Accept images and PDFs
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileUpload}
            />
          </>
        )}

        {/* Snackbar for success message */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000} // Closes after 3 seconds
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "300px" }}
          >
            File uploaded successfully!
          </Alert>
        </Snackbar>

        <CustomInputField
          label="Enter Website Name / Link"
          placeholder="Enter website link"
        />
        <CustomInputField
          label="Description"
          placeholder="Describe the issue"
          multiLineProps={{ maxChar: 1500, maxRows: 7, minRows: 6 }}
        />
        <Stack
          alignItems="flex-start"
          spacing={6}
          padding={2}
          borderRadius="8px"
          bgcolor={"#E6E6E6"}
        >
          <Typography variant="h6" fontWeight="bold" color="textActive">
            Attachment
          </Typography>
          <Typography variant="l1">
          If you have any proof or supporting documents, 
          please feel free to attach the file
           (PDF, document, or image)
           
          </Typography>
          <CustomButton
            label="Add File"
            variant="outlined"
            color="info"
            startAdornment={<UploadFile />}
            onClick={handleButtonClick}
          />
          <input
            type="file"
            accept="image/*,application/pdf"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          {successMessage && (
            <Alert
              severity="success"
              sx={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                borderRadius: "8px",
                backgroundColor: "primary.100",
                fontSize: "16px",
              }}
            >
              {successMessage}
            </Alert>
          )}
        </Stack>
        <Stack direction={"row"} gap={2}>
          <CustomButton
            label="Submit"
            size="large"
            variant="contained"
            color="primary"
            onClick={handlePush}
            sx={{ borderRadius: "4px", width: "100%" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Form;
