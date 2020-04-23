import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#222831',
    },
    secondary: {
      main: '#30475e',
    },
    warning: {
      main: '#f2a365'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ececec',
    },
  },
});

export default theme;