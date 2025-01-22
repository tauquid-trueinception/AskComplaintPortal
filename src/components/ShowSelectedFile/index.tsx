'use client'
import React from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { GoogleDrive } from "../icon";

interface FileDetailsCardProps {
  file: File; // The uploaded file object
  onFileClick: () => void; // Function to handle file preview click
  onFileDelete: () => void; // Function to handle file deletion
}

const FileDetailsCard: React.FC<FileDetailsCardProps> = ({
  file,
  onFileClick,
  onFileDelete,
}) => {
  return (
    <Stack
      sx={{
        display: "flex",
        padding: "8px 12px",
        alignItems: "center",
        gap: "18px",
        alignSelf: "stretch",
        borderRadius: "8px",
        background: "#292524",
        flexDirection: "row",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      onClick={onFileClick} // Open file preview on click
    >
      {/* GoogleDrive Icon */}
      <GoogleDrive sx={{ color: "white" }} />

      {/* File Details */}
      <Stack direction="column" gap="6px" flexGrow={1}>
        <Typography variant="body1" fontWeight="medium" color="white">
          {file.name}
        </Typography>
        <Typography variant="body2" fontWeight="normal" color="white">
          {(file.size / 1024 / 1024).toFixed(2)} MB
        </Typography>
      </Stack>

      {/* Delete File */}
      <IconButton
        onClick={(e) => {
          e.stopPropagation(); // Prevent opening the preview when clicking delete
          onFileDelete();
        }}
        sx={{
          border: "none",
          height: "32px",
          width: "32px",
        }}
      >
        <Close sx={{ color: "white" }} />
      </IconButton>
    </Stack>
  );
};

export default FileDetailsCard;
