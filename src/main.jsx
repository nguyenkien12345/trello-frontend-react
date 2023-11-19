import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from './theme'

// Documentation: https://mui.com/material-ui/experimental-api/css-theme-variables/migration/
// Khi chúng ta sử dụng React.StrictMode và chạy trên môi trường dev thì nó sẽ thường luôn luôn render kiểu 2 lần
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <React.StrictMode> */}
    <CssVarsProvider theme={theme}> {/* Cấu hình theme của MUI */}
      <CssBaseline /> {/* Đảm bảo css hoạt động ổn đinh, nhất quán trên tất cả các trình duyệt, không có trình duyệt nào bị conflict (Giống như thư viện normalize.css) */}
      <App />
    </CssVarsProvider>
    {/* </React.StrictMode> */}
  </>
)
