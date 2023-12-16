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
  },
  components: {
    // Theme Override (Ghi đè các thuộc tính mặc định của hệ thống MUI SYSTEM) với styleOverrides
    // Tên của component MUI SYSTEM
    // MUICssBaseline là component liên quan đến cấu hình css toàn bộ các trình duyệt. Riêng với
    // component MuiCssBaseline sẽ dùng body chứ không dùng root như các component khác của MUI
    MuiCssBaseline: {
      styleOverrides:{
        body: {
          // Chúng ta sẽ cấu hình đảm bảo scrollbar trên các trình duyệt phải giống hệt nhau
          // *:: apply cho toàn bộ tất cả các scrollbar trong trình duyệt của mình
          '*::-webkit-scrollbar': {
            width: '8px',
            heighit: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#00b894'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides:{
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides:{
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides:{
        // Chúng ta cũng có thể chuyển nó về dạng function để lấy ra prop theme và thực hiện Override
        // các thuộc tính như bình thường
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            // Không phải bất cứ thuộc tính nào cũng có thể ghi đè bằng cách sử dụng key:value đôi lúc
            // có 1 vài thuộc tính phải ghi đè bằng cách khác
            '.MuiOutlinedInput-notchedOutline': {
              // Nếu chúng ta sử dụng borderColor: theme.palette.primary.light mà không gọi bên trong MuiOutlinedInput-notchedOutline
              // thì nó sẽ không hoạt động
              borderColor: theme.palette.primary.light
            },
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: theme.palette.primary.main
              }
            },
            '& fieldset': {
              borderWidth: '1px !important'
            }
          }
        }
      }
    }
  }
})

export default theme