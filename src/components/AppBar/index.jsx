import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Badge from '@mui/material/Badge'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
// Sử dụng ReactComponent để import các file svg từ bên ngoài dự án vào bên trong dự án
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import AppsIcon from '@mui/icons-material/Apps'
import CloseIcon from '@mui/icons-material/Close'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import SearchIcon from '@mui/icons-material/Search'
import ModeSelect from '~/components/ModeSelect'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Templates from './Menus/Templates'
import Starred from './Menus/Starred'
import Profiles from './Menus/Profiles'

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }}/>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {/* Cách hiển thị ra các file svg mà chúng ta import từ ngoài dự án vào bên trong dự án */}
          <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx={{ color: 'white' }} />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 700, color: 'white' }}>Trello</Typography>
        </Box>

        <Box
          // Ở màn hình từ xs đổ xuống display là none, ở màn hình từ md đổ lên display là flex
          sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}
        >
          <Workspaces />
          <Recent />
          <Templates />
          <Starred />
          <Button
            sx={{
              color: 'white',
              border: 'none',
              '&:hover': {
                border: 'none'
              }
            }}
            variant='outlined'
            startIcon={<LibraryAddIcon/>}
          >
          Create
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id='outlined-search'
          label='Search...'
          type='text'
          size='small'
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused':  { color: 'white' },
            '& .MuiOutlinedInput-root':  {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'white' }}/>
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize='small'
                sx={{
                  color: searchValue ? 'white' : 'transparent',
                  cursor: 'pointer'
                }}
                onClick={() => setSearchValue('')}
              />
            )
          }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <ModeSelect/>

        <Tooltip title='Notifications'>
          <Badge color='secondary' variant='dot' sx={{ cursor: 'pointer'}}>
            <NotificationsNoneIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>

        <Tooltip title='Help'>
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'white' }}/>
        </Tooltip>

        <Profiles />
      </Box>

    </Box>
  )
}

export default AppBar