import React from "react";
import {Mail, Notifications, CarRepair} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Typography,
  styled,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
  display: "flex",
  //   alignItems: "center",
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({theme}) => ({
  display: "none", // Display Icons when screen size is above "sm"
  paddingRight: "10px",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex", // Hide Icons when screen size is below "sm"
  },
}));

const UserBox = styled(Box)(() => ({
  display: "flex", // Hide UserBox when screen size is above "sm"
  gap: "10px",
  alignItems: "center",
}));

const NavBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h4" sx={{display: {xs: "none", sm: "block"}}}>
          Zoomly
        </Typography>
        <CarRepair
          sx={{display: {xs: "block", sm: "none"}, fontSize: "48px"}}
        />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <UserBox>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
          </Icons>
          {/* <Button> */}
          <Avatar
            sx={{width: 30, height: 30, "&:hover": {cursor: "pointer"}}}
            src="./src/assets/profile.jpg"
            onClick={() => setOpen(true)}
          />
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={() => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={() => setOpen(false)}>Profile</MenuItem>
            <MenuItem onClick={() => setOpen(false)}>My account</MenuItem>
            <MenuItem onClick={() => setOpen(false)}>Logout</MenuItem>
          </Menu>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
