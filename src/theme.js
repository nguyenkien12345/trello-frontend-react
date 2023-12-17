import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// import { teal, deepOrange, cyan, orange } from '@mui/material/colors'

// Khai báo chiều cao cho app bar, board bar, board content
const APP_BAR_HEIGHT = '68px'
const BOARD_BAR_HEIGHT = '78px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'

const theme = extendTheme({
  // Tạo ra bộ css custom riêng của chúng ta
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange
    //   }
    //   // spacing: (factor) => `${0.25 * factor}rem` // Cấu hình lại spacing (ghi đè spacing mặc định của MUI)
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange
    //   }
    //   // spacing: (factor) => `${0.25 * factor}rem` // Cấu hình lại spacing (ghi đè spacing mặc định của MUI)
    // }
  },
  components: {
    // Theme Override (Ghi đè các thuộc tính mặc định của hệ thống MUI SYSTEM) với styleOverrides
    // Tên của component MUI SYSTEM
    // MUICssBaseline là component liên quan đến cấu hình css toàn bộ các trình duyệt
    // như firefox, cốc cốc, google, Edge,.... Riêng với component MuiCssBaseline sẽ dùng body chứ
    // không dùng root như các component khác của MUI
    MuiCssBaseline: {
      styleOverrides:{
        body: {
          // *:: áp dụng cho toàn bộ tất cả các scrollbar trên trang web của chúng ta trong tất cả các trình duyệt browser
          '*::-webkit-scrollbar': {
            width: '8px',
            heighit: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides:{
        root: {
          textTransform: 'none',
          borderWidth: '1px',
          '&:hover': { borderWidth: '1px' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides:{
        root: ({ theme }) => {
          return {
            // color: theme.palette.primary.main,
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides:{
        root: ({ theme }) => {
          return {
            // Chỉ áp dụng cho các thẻ Typography có variant là body1
            '&.MuiTypography-body1': {
              fontSize: '0.875rem'
            }
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
            // color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline': {
              // borderColor: theme.palette.primary.light
            },
            '&:hover': {
              '.MuiOutlinedInput-notchedOutline': {
                // borderColor: theme.palette.primary.main
              }
            },
            '& fieldset': { borderWidth: '1px !important' },
            '&:hover fieldset': { borderWidth: '2px !important' },
            '&.Mui-focused fieldset': { borderWidth: '2px !important' }
          }
        }
      }
    }
  }
})

export default theme