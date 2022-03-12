import {styled } from '@mui/material'
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
export const Tab = styled(TabUnstyled)`

  color: #134B8A;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding:10px;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;

  &.${tabUnstyledClasses.selected} {
    background-color: #134B8A;
    color: #fff;
  }
  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-size: 0.875rem;
`;

export const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  border-radius:30px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0 2px 4px rgb(0,0,0,0.4);
`;