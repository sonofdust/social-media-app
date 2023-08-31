// import React, {useContext} from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import React, {useState} from "react";
import {PaletteMode} from "@mui/material";

interface ChildComponentProps {
  // mode: PaletteMode | undefined;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode | undefined>>;
}

const SideBar: React.FC<ChildComponentProps> = ({setMode}) => {
  const [checked, setChecked] = useState(false);

  const toggleMode = () => {
    setMode((prevMode: any) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <Box flex={1} p={1} sx={{display: {xs: "none", sm: "block"}}}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#pages">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#groupes">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groupes" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#market">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#person ">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#simple-list">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#simple-list">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                  toggleMode();
                }}
                inputProps={{"aria-label": "controlled"}}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
