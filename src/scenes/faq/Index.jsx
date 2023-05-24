import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../Theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem erat, eleifend in pretium eu,
            fermentum a elit. Integer vitae arcu metus. Nullam sed tincidunt neque. Suspendisse neque eros, cursus vitae
            lorem sed, imperdiet ornare ante. Nullam elit ex, varius in fermentum sit amet, volutpat non sapien.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem erat, eleifend in pretium eu,
            fermentum a elit. Integer vitae arcu metus. Nullam sed tincidunt neque. Suspendisse neque eros, cursus vitae
            lorem sed, imperdiet ornare ante. Nullam elit ex, varius in fermentum sit amet, volutpat non sapien.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem erat, eleifend in pretium eu,
            fermentum a elit. Integer vitae arcu metus. Nullam sed tincidunt neque. Suspendisse neque eros, cursus vitae
            lorem sed, imperdiet ornare ante. Nullam elit ex, varius in fermentum sit amet, volutpat non sapien.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem erat, eleifend in pretium eu,
            fermentum a elit. Integer vitae arcu metus. Nullam sed tincidunt neque. Suspendisse neque eros, cursus vitae
            lorem sed, imperdiet ornare ante. Nullam elit ex, varius in fermentum sit amet, volutpat non sapien.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lorem erat, eleifend in pretium eu,
            fermentum a elit. Integer vitae arcu metus. Nullam sed tincidunt neque. Suspendisse neque eros, cursus vitae
            lorem sed, imperdiet ornare ante. Nullam elit ex, varius in fermentum sit amet, volutpat non sapien.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
