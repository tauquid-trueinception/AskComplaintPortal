import React from "react";
import { Modal, Box, Typography } from "@mui/material";

interface FilePreviewModalProps {
  open: boolean;
  onClose: () => void;
  file: File | null;
}

const FilePreviewModal: React.FC<FilePreviewModalProps> = ({ open, onClose, file }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="file-preview" aria-describedby="file-preview-description">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: 24,
          maxWidth: "90%",
          maxHeight: "90%",
          overflow: "auto",
        }}
      >
        {file?.type.startsWith("image/") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            style={{ width: "100%", height: "auto" }}
          />
        ) : (
          <Typography variant="body1">
            File preview is not available for this file type.
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default FilePreviewModal;
