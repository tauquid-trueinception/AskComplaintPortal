import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

interface TabinationProps {
  tabs: string[];
  defaultSelected?: string;
  onChange?: (selectedTab: string) => void;
}

// Styled components
const TabContainer = styled(Box)(({ }) => ({
    display: 'flex',
    width: '386px',
    padding: '6px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '999px',
border: '1px solid #353538',
background: ' #1E1E1E',
}));

const TabButton = styled('button')<{ selected: boolean }>(({ selected }) => ({
  backgroundColor: selected ? '#74747A' : 'transparent',
  color: selected ? 'white' : 'rgba(255, 255, 255, 0.6)',
  border: 'none',
  borderRadius: '999px',
  width: '183px',
  height: '40px',
  padding: '10px 8px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 500,
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: selected ? '#74747A' : '#333',
    color: 'white',
  },
}));

const Tabination: React.FC<TabinationProps> = ({ tabs, defaultSelected, onChange }) => {
  const [selectedTab, setSelectedTab] = useState<string>(defaultSelected || tabs[0]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    if (onChange) {
      onChange(tab);
    }
  };

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabButton
          key={tab}
          selected={selectedTab === tab}
          onClick={() => handleTabChange(tab)}
        >
          {tab}
        </TabButton>
      ))}
    </TabContainer>
  );
};

export default Tabination;
