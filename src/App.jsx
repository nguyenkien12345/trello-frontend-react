import { useColorScheme } from '@mui/material/styles'
// import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function App() {
  // useColorScheme đã xử lý cho ta luôn cả phần localStorage.setItem và localStorage.getItem với key mặc định đang là mui-mode
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    let selectedMode = event.target.value
    // if (selectedMode === 'system') {
    //   // Lấy ra giá trị dark mode hay light mode từ system của máy tính người dùng thông qua useMediaQuery với các key như dark hay light
    //   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    //   const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
    //   selectedMode = prefersDarkMode && !prefersLightMode ? 'light' : 'dark'
    // }
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode Theme</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label='Mode Theme'
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <LightModeOutlinedIcon fontSize='small' /> Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <DarkModeOutlinedIcon fontSize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <SettingsBrightnessIcon fontSize='small' /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default App
