import {
  Box,
  Button,
  CssBaseline,
  PaletteMode,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import NavBar from "./components/NavBar";
import Add from "./components/Add";
import {useState} from "react";
function App() {
  // const [count, setCount] = useState(0);
  //  const [disabled, setDisabled] = useState(false);

  // const BlueButton = styled(Button)(({theme}) => ({
  //   backgroundColor: theme.palette.secondary.main,
  //   color: "#888",
  //   margin: 5,

  //   "&:hover": {backgroundColor: "pink"},
  //   "&:disabled": {backgroundColor: "gray", color: "white"},
  // }));

  // const {toggleTheme, isDarkTheme} = useThemeToggle();

  const [mode, setMode] = useState<PaletteMode | undefined>("dark");
  const darkTheme = createTheme({palette: {mode: mode}});
  // const toggleTheme = () => {
  //   // Toggle between 'dark' and 'light' mode
  //   setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  // };
  // const switchTheme = () => setMode(mode === "dark" ? "light" : "dark");

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Box>
          <NavBar />
          <Stack direction="row" spacing={2} justifyContent="space-evenly">
            <SideBar setMode={setMode} />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
