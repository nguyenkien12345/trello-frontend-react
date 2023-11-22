import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { teal, deepOrange, cyan, orange } from '@mui/material/colors'

// Create a theme instance. (File cấu hình (custom) theme mặc định của MUI)
// Documentation: https://mui.com/material-ui/experimental-api/css-theme-variables/migration/
const theme = extendTheme({
  // Tạo ra bộ css custom riêng của chúng ta
  trello: {
    appBarHeight: '68px',
    boardBarheight: '78px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
      // spacing: (factor) => `${0.25 * factor}rem` // Cấu hình lại spacing (ghi đè spacing mặc định của MUI)
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
      // spacing: (factor) => `${0.25 * factor}rem` // Cấu hình lại spacing (ghi đè spacing mặc định của MUI)
    }
  }
})

export default theme