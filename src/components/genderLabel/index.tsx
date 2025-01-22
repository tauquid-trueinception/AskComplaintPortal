import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

type GenderSelectionProps = {
  label: string; // Label for the radio group
  genderOptions: Record<string, string>; // Object containing gender options
  selectedGender: string; // Current selected gender
  onChange: (value: string) => void; // Handler for when the gender selection changes
};

const GenderSelection: React.FC<GenderSelectionProps> = ({
  label,
  genderOptions,
  selectedGender,
  onChange,
}) => {
  return (
    <FormControl>
      {/* Label */}
      <FormLabel
        sx={{
          color: "#fff",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </FormLabel>

      {/* Radio Group */}
      <RadioGroup
        row
        name="gender"
        value={selectedGender} // Controlled component
        onChange={(event) => onChange(event.target.value)} // Pass selected value to parent
      >
        {/* Map gender options */}
        {Object.entries(genderOptions).map(([key, value]) => (
          <FormControlLabel
            key={key}
            value={key}
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
                {value}
              </span>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default GenderSelection;
