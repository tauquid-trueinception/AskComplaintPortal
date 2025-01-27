"use client";

import {
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CustomInputField from "../textField";
import CustomButton from "../customButtons";
import { Close, UploadFile } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { GoogleDrive, Info } from "../icon";
import { useRouter } from "next/navigation";
import FileDetailsCard from "../ShowSelectedFile";
import FilePreviewModal from "../FilePreviewModal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DailCodesSelect from "../DailCodeSelect";
import Tabination from "../Tabination";
import DateCalendarReferenceDate from "../Calender";

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const Form = () => {
  const theme = useTheme();
  const router = useRouter();

  const [policeComplaint, setPoliceComplaint] = useState<string | null>(null);
  const fraudFileInputRef = useRef<HTMLInputElement>(null); // Ref for fraud file input
  const attachmentFileInputRef = useRef<HTMLInputElement>(null); // Ref for attachment file input
  const [selectedCountry, setSelectedCountry] = useState<string>(`+91`);

  // State for fraud file and attachment file
  const [uploadedFraudFile, setUploadedFraudFile] = useState<File | null>(null);
  const [uploadedAttachmentFile, setUploadedAttachmentFile] =
    useState<File | null>(null);

  // Preview modal state for both fraud and attachment files
  const [previewFraudOpen, setPreviewFraudOpen] = useState(false);
  const [previewAttachmentOpen, setPreviewAttachmentOpen] = useState(false);

  // State for selected language
  const [language, setLanguage] = useState("English"); // State for selected language

  // State for menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState<string>(""); // Selected value

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    handleCloseMenu();
  };

  // Handle fraud file selection
  const handleFraudFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedFraudFile(event.target.files[0]);
    }
  };

  const handleFraudFileClick = () => {
    if (uploadedFraudFile) {
      setPreviewFraudOpen(true);
    }
  };

  const handleFraudFileDelete = () => {
    setUploadedFraudFile(null);
  };

  // Handle attachment file selection
  const handleAttachmentFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      setUploadedAttachmentFile(event.target.files[0]);
    }
  };

  const handleAttachmentFileClick = () => {
    if (uploadedAttachmentFile) {
      setPreviewAttachmentOpen(true);
    }
  };

  const handleAttachmentFileDelete = () => {
    setUploadedAttachmentFile(null);
  };

  // Police complaint selection
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPoliceComplaint(event.target.value);
  };

  const isMobile = useMediaQuery(theme.breakpoints.down("mobile")); // For small screens
  const isTablet = useMediaQuery(
    theme.breakpoints.between("tablet", "tabletLandscape")
  );

  const handleTabChange = (selectedTab: string) => {
    setLanguage(selectedTab); // Update the language state
  };

  return (
    <Stack
    bgcolor={"#121212"}
    width={'100%'}
    alignItems={"center"}
    flexDirection={"column"}
    gap={"32px"}
  >
    <Stack
      bgcolor={"#121212"}
      width={isMobile ? "393px" : isTablet ? "764px" : "1168px"}
      alignItems={"center"}
      flexDirection={"column"}
      gap={"32px"}
    >
      <Typography variant="h3" fontWeight={"normal"} color="#fff">
        Truelink Complaint Portal
      </Typography>
      <Tabination
        tabs={["English", "Hindi"]}
        defaultSelected="English"
        onChange={handleTabChange}
      />
      <Stack
        sx={{
          margin: "2rem auto",
          padding: isMobile ? "16px" : "24px",
          borderRadius: "8px",
          width: "592px",
        }}
      >
        <Stack gap={"36px"}>
          <CustomInputField
            label={translations[language].name}
            placeholder={translations[language].namePlaceholder}
            required
            sx={{ borderRadius: "8px" }}
          />

          <FormControl>
            {/* Label */}
            <FormLabel
              sx={{
                color: "#fff",
                marginBottom: "0.5rem",
              }}
            >
              {translations[language].genderlabel}
            </FormLabel>

            {/* Radio Group */}
            <RadioGroup row defaultValue="female" name="gender">
              {/* Radio Buttons */}
              {["Female", "Male", "Other"].map((label) => (
                <FormControlLabel
                  key={label.toLowerCase()}
                  value={label.toLowerCase()}
                  control={
                    <Radio
                      sx={{
                        color: "#74747A", // Border color
                      }}
                    />
                  }
                  label={
                    <span
                      style={{
                        color: "#fff", // Text color
                      }}
                    >
                      {label}
                    </span>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
          <Stack direction={"column"} justifyContent={"flex-start"} gap={"8px"}>
            <Typography fontSize={'16px'} fontWeight={"medium"} color="white">
              {translations[language].mobileNumber}
              <span style={{ color: "#F50D0D", marginLeft: "8px" }}>*</span>
            </Typography>
            <Stack direction={"row"} gap={"30px"}>
              <DailCodesSelect
                country={selectedCountry}
                setCountry={setSelectedCountry}
              />
              <CustomInputField
                label=""
                placeholder="1234 XX XXXX"
                sx={{ borderRadius: "8px", height: "48px" }}
                type="number"
              />
            </Stack>
          </Stack>
          <CustomInputField
            label={translations[language].address}
            placeholder={translations[language].addressPlaceholder}
          />
          <Stack direction={"row"} gap={"36px"}>
            <CustomInputField
              label={translations[language].city}
              placeholder={translations[language].cityPlaceholder}
              sx={{ width: "278px", borderRadius: "8px" }}
            />
            <CustomInputField
              label={translations[language].pincode}
              placeholder={translations[language].pincodePlaceholder}
              type="number"
              required
              sx={{ width: "278px", borderRadius: "8px" }}
            />
          </Stack>
          <CustomInputField
            label={translations[language].state}
            placeholder={translations[language].statePlaceholder}
            endAdornment={
              <IconButton
                onClick={handleOpenMenu}
                sx={{ border: "none", padding: "0" }}
              >
                <ExpandMoreIcon style={{ cursor: "pointer", color: "#fff" }} />
              </IconButton>
            }
            sx={{ borderRadius: "8px" }}
          />
          <CustomInputField
            label={translations[language].companyName}
            placeholder={translations[language].companyNamePlaceholder}
            required
            sx={{ borderRadius: "8px" }}
          />
          <CustomInputField
            label={translations[language].fraudAmount}
            placeholder={translations[language].fraudAmountPlaceholder}
            startAdornment={"₹"}
            sx={{ borderRadius: "8px" }}
          />

          <CustomInputField
            label={translations[language].fraudType}
            placeholder={translations[language].fraudTypePlaceholder}
            required
            value={selectedOption}
            sx={{ borderRadius: "8px" }}
            endAdornment={
              <IconButton
                onClick={handleOpenMenu}
                sx={{ border: "none", padding: "0" }}
              >
                <ExpandMoreIcon style={{ cursor: "pointer", color: "#fff" }} />
              </IconButton>
            }
          />
          <DateCalendarReferenceDate label="Select Date" />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            {["Phishing Scams", "Payment Gateway Fraud", "Others"].map(
              (option, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handleSelectOption(option)}
                >
                  {option}
                </MenuItem>
              )
            )}
          </Menu>
          <FormControl>
            <FormLabel
              id="police-complaint-label"
              sx={{
                marginBottom: "0.5rem",
                color: "rgba(255, 255, 255, 0.87)", // Label color
              }}
            >
              {translations[language].policeComplaint}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="police-complaint-label"
              name="police-complaint"
              value={policeComplaint}
              onChange={handleRadioChange}
            >
              <FormControlLabel
                value="Yes"
                control={
                  <Radio
                    sx={{
                      color: "#74747A", // Default border color
                    }}
                  />
                }
                label="Yes"
                sx={{
                  color: "rgba(255, 255, 255, 0.87)", // Text color
                }}
              />
              <FormControlLabel
                value="No"
                control={
                  <Radio
                    sx={{
                      color: "#74747A", // Default border color
                    }}
                  />
                }
                label="No"
                sx={{
                  color: "rgba(255, 255, 255, 0.87)", // Text color
                }}
              />
            </RadioGroup>
          </FormControl>

          {/* File upload section for fraud */}
          {policeComplaint === "Yes" && (
            <Stack
              sx={{
                display: "flex",
                padding: "16px",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px",
                alignSelf: "stretch",
                borderRadius: "8px",
                background: "#161616",
              }}
            >
              <Stack
                sx={{
                  border: "1px dashed #D4D4D4",
                  borderRadius: 2,
                  padding: "32px 24px",
                  alignSelf: "stretch",
                  textAlign: "center",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={fraudFileInputRef}
                  onChange={handleFraudFileChange}
                />
                <IconButton
                  sx={{
                    height: "40px",
                    width: "40px",
                    backgroundColor: "#44403C",
                  }}
                  onClick={() => fraudFileInputRef.current?.click()}
                >
                  <AddIcon
                    sx={{ height: "24px", width: "24px", color: "white" }}
                  />
                </IconButton>
                <Typography fontSize={"12px"} fontWeight="light" color="white">
                  {translations[language].policeComplaintD1}
                </Typography>
                <Stack
                  direction="row"
                  gap="8px"
                  alignContent="center"
                  alignItems="center"
                >
                  <Info
                    sx={{ height: "18px", width: "18px", color: "white" }}
                  />
                  <Typography fontSize={"12px"} fontWeight="light" color="white">
                    {translations[language].policeComplaintD2}
                  </Typography>
                </Stack>
              </Stack>

              {uploadedFraudFile && (
                <FileDetailsCard
                  file={uploadedFraudFile}
                  onFileClick={handleFraudFileClick}
                  onFileDelete={handleFraudFileDelete}
                />
              )}
            </Stack>
          )}

          {/* Preview Modal for fraud file */}
          <FilePreviewModal
            open={previewFraudOpen}
            onClose={() => setPreviewFraudOpen(false)}
            file={uploadedFraudFile}
          />
          <CustomInputField
            label={translations[language].website}
            placeholder={translations[language].websitePlaceholder}
            sx={{ borderRadius: "8px" }}
          />
          <CustomInputField
            label={translations[language].description}
            sx={{ borderRadius: "8px" }}
            placeholder={translations[language].descriptionPlaceholder}
            multiLineProps={{ minRows: 4, maxRows: 4, maxChar: 1500 }}
          />
          {/* File upload section for attachment */}
          <Stack
            sx={{
              display: "flex",
              padding: "12px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "32px",
              alignSelf: "stretch",
              borderRadius: "8px",
              background: "#161616",
            }}
          >
            <Typography
              fontSize={"16px"}
              fontWeight="medium"
              color="rgba(255, 255, 255, 0.87)"
            >
              {translations[language].attachment}
            </Typography>
            <Typography fontSize={"14px"} fontWeight={"normal"} color="#fff">
              {translations[language].attachmentInfo}
            </Typography>
            {uploadedAttachmentFile && (
              <Stack
                alignItems={"center"}
                height={"40px"}
                width={"268px"}
                onClick={handleAttachmentFileClick}
                justifyContent={"flex-start"}
                flexDirection={"row"}
                border={"1px solid #D4D4D4"}
                borderRadius={"8px"}
                padding={"2.5px 2.498px 2.5px 2.5px"}
                gap={"8px"}
                // p={1}
              >
                <Stack
                  gap={"8px"}
                  direction={"row"}
                  alignContent={"center"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  {" "}
                  <GoogleDrive sx={{ height: "20px", width: "20px" }} />{" "}
                  <Typography
                    fontSize={"16px"}
                    fontWeight={"normal"}
                    color="rgba(255, 255, 255, 0.60)"
                    sx={{ textOverflow: "ellipsis" }}
                    alignSelf={"stretch"}
                    width={"200px"}
                  >
                    {uploadedAttachmentFile.name}
                  </Typography>
                </Stack>
                <IconButton
                  onClick={handleAttachmentFileDelete}
                  sx={{ border: "none" }}
                >
                  <Close
                    sx={{ height: "20px", width: "20px", color: "#FFFFFFDE" }}
                  />
                </IconButton>
              </Stack>
            )}
            <CustomButton
              label="Add File"
              variant="contained"
              sx={{ width: "280px" }}
              color="info"
              startAdornment={<UploadFile />}
              onClick={() => attachmentFileInputRef.current?.click()}
            />

            <input
              type="file"
              accept="image/*,application/pdf"
              style={{ display: "none" }}
              ref={attachmentFileInputRef}
              onChange={handleAttachmentFileChange}
            />
          </Stack>

          {/* Preview Modal for attachment file */}
          <FilePreviewModal
            open={previewAttachmentOpen}
            onClose={() => setPreviewAttachmentOpen(false)}
            file={uploadedAttachmentFile}
          />

          <Stack direction={"row"} gap={2}>
            <CustomButton
              label="Submit"
              size="large"
              variant="contained"
              color="info"
              sx={{ borderRadius: "4px", width: "100%" }}
              onClick={() => router.push("/Watsapp")}
            />
          </Stack>
        </Stack>
      </Stack>
      </Stack>
    </Stack>
  );
};

export default Form;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const translations: Translations = {
  English: {
    address: "Address",
    addressPlaceholder: "Enter your address",
    name: "Name",
    namePlaceholder: "Enter your name",
    genderlabel: "Gender",
    mobileNumber: "Mobile Number",
    city: "City",
    cityPlaceholder: "Enter your city",
    pincode: "Pincode",
    pincodePlaceholder: "Enter your pincode",
    state: "State",
    statePlaceholder: "Enter your state",
    companyName: "Enter Company Name",
    companyNamePlaceholder: "Enter company name",
    fraudAmount: "Enter Fraud Amount",
    fraudAmountPlaceholder: "Enter fraud amount",
    fraudType: "Fraud Type",
    fraudTypePlaceholder: "Select Fraud Type",
    date: "Date",
    datePlaceholder: "Date of incident / fraud",
    website: "Website URL",
    websitePlaceholder: "https://123test.com",
    description: "Description",
    descriptionPlaceholder: "Enter description",
    policeComplaint: "Have you filed a police complaint?",
    policeComplaintD1: "Drag and drop or click to choose file",
    policeComplaintD2: "Max file size 10 MB",
    attachment: "Attachment",
    attachmentInfo:
      "If you have any proof or supporting documents (e.g., Transaction Slip), please feel free to attach the file (PDF, documents, or image).",
  },
  Hindi: {
    mobileNumber: "मोबाइल नंबर",
    address: "पता",
    addressPlaceholder: "अपना पता दर्ज करें",
    name: "नाम",
    namePlaceholder: "अपना नाम दर्ज करें",
    genderlabel: "लिंग",
    city: "शहर",
    cityPlaceholder: "अपना शहर दर्ज करें",
    pincode: "पिनकोड",
    pincodePlaceholder: "अपना पिनकोड दर्ज करें",
    state: "राज्य",
    statePlaceholder: "अपना राज्य दर्ज करें",
    companyName: "कंपनी का नाम दर्ज करें",
    companyNamePlaceholder: "कंपनी का नाम दर्ज करें",
    fraudAmount: "धोखाधड़ी की राशि दर्ज करें",
    fraudAmountPlaceholder: "धोखाधड़ी की राशि दर्ज करें",
    fraudType: "धोखाधड़ी का प्रकार",
    fraudTypePlaceholder: "धोखाधड़ी का प्रकार चुनें",
    date: "तारीख",
    datePlaceholder: "घटना / धोखाधड़ी की तारीख",
    website: "वेबसाइट URL",
    websitePlaceholder: "https://123test.com",
    description: "विवरण",
    descriptionPlaceholder: "विवरण दर्ज करें",
    policeComplaint: "क्या आपने पुलिस शिकायत दर्ज की है?",
    policeComplaintD1: "फाइल खींचें और छोड़ें या चुनने के लिए क्लिक करें",
    policeComplaintD2: "अधिकतम फाइल साइज 10 MB",
    attachment: "अनुलग्नक",
    attachmentInfo:
      "अगर आपके पास कोई प्रमाण या सहायक दस्तावेज हैं, जैसे लेन-देन की स्लिप, तो कृपया फाइल (PDF, दस्तावेज़, या छवि) संलग्न करें। ",
  },
};
