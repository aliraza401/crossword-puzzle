import { green, gold, red } from "@ant-design/colors";

const primaryColor = "#3A8DFF";
const successColor = green[5];
const warningColor = gold[5];
const errorColor = red[5];

const antdTheme = {
  primaryColor: primaryColor,
  successColor: successColor,
  warningColor: warningColor,
  errorColor: errorColor,
};

export const crosswordTheme = {
  allowNonSquare: false,
  columnBreakpoint: "768px",
  gridBackground: "rgb(0,0,255)",
  cellBackground: "rgb(255,255,255)",
  cellBorder: "rgb(0,0,255)",
  textColor: "rgb(0,0,0)",
  numberColor: "rgba(0,0,0, 0.25)",
  focusBackground: "rgb(255,255,0)",
  highlightBackground: "rgb(255,255,204)",
};

const customTheme = { ...antdTheme };

export default customTheme;
