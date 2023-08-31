import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  InsertPhoto,
  PersonAdd,
  Videocam,
} from "@mui/icons-material";
import {useState} from "react";
const Add = () => {
  const [open, setOpen] = useState(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const UserBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  }));

  const theme = createTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          position: "fixed",
          bottom: {xs: 250, md: 250},
          left: {xs: "calc(50% - 25px)", md: 10},
        }}
      >
        <Tooltip
          title="Add Post"
          placement="bottom"
          onClick={() => setOpen(true)}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
        <StyledModal
          open={open}
          onClose={() => setOpen(true)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            width={400}
            height={300}
            bgcolor="background.default"
            p={3}
            borderRadius={5}
          >
            <Typography
              variant="h6"
              fontWeight={400}
              color="gray"
              textAlign="center"
            >
              Create Post
            </Typography>
            <UserBox>
              <Avatar
                sx={{width: 30, height: 30, "&:hover": {cursor: "pointer"}}}
                src="./src/assets/profile.jpg"
              ></Avatar>
              <Typography fontWeight={500} variant="body1">
                John Dough
              </Typography>
            </UserBox>
            <TextField
              sx={{width: "100%"}}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <InsertPhoto color="secondary" />
              <Videocam color="success" />
              <PersonAdd color="error" />
            </Stack>
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              fullWidth
            >
              <Button>Post</Button>
              <Button sx={{width: "100px"}}>
                <DateRange />
              </Button>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </ButtonGroup>
          </Box>
        </StyledModal>
      </Box>
    </>
  );
};

export default Add;
