import React, { useState } from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { IconButton, Box } from "@mui/material";
import CustomInputField from "../textField";
import { Calender } from "../icon";

type DateCalendarReferenceDateProps = {
  label: string;
};

const DateCalendarReferenceDate: React.FC<DateCalendarReferenceDateProps> = ({
  label,
}) => {
  const [open, setOpen] = useState(false); // Controls calendar visibility
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null); // Tracks the selected date

  const handleOpen = () => setOpen(true); // Open the calendar
  const handleClose = () => setOpen(false); // Close the calendar

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue); // Update the selected date
    handleClose(); // Close the calendar after selecting a date
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Input Field */}
      <CustomInputField
        label={label}
        value={selectedDate ? selectedDate.format("YYYY-MM-DD") : ""} // Display selected date
        placeholder="Select a date"
        endAdornment={
          <IconButton onClick={handleOpen} sx={{ border: "none", padding: "0" }}>
            <Calender sx={{ color: "white" }} />
          </IconButton>
        }
        required
      />

      {/* Calendar */}
      {open && (
        <Box mt={2}>
          <DateCalendar
            value={selectedDate} // Show the selected date in the calendar
            onChange={(newValue) => handleDateChange(newValue)} // Update the date on selection
            sx={{
              backgroundColor: "white",
            }}
          />
        </Box>
      )}
    </LocalizationProvider>
  );
};

export default DateCalendarReferenceDate;
