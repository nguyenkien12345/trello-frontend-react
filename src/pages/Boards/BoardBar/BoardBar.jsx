import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '5px',
  // & ở đây chính là component Chip (Chúng ta sẽ đi từ thằng Chip tìm đến thằng con MuiSvgIcon-root)
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx = {MENU_STYLE}
          icon={<DashboardIcon />}
          label="NguyenTrungKien Mern Stack Board"
          onClick={() => {}}
        />
        <Chip
          sx = {MENU_STYLE}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          onClick={() => {}}
        />
        <Chip
          sx = {MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          onClick={() => {}}
        />
        <Chip
          sx = {MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          onClick={() => {}}
        />
        <Chip
          sx = {MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          onClick={() => {}}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
          variant='outlined'
          startIcon={<PersonAddIcon/>}
        >
        Invite
        </Button>

        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            // & ở đây chính là component AvatarGroup (Chúng ta sẽ đi từ thằng AvatarGroup tìm đến thằng con MuiAvatar-root)
            // css cho các thẻ Avartar con bên trong AvatarGroup
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='Mai Thị Thanh Thúy 1'>
            <Avatar alt="Mai Thị Thanh Thúy 1" src="https://media.licdn.com/dms/image/D5603AQHG5raebuCnBA/profile-displayphoto-shrink_800_800/0/1677594302126?e=1707955200&v=beta&t=BHPLOHaGrPpgkNCE2PlR0DLnB334M1vZmiZ8jLD9oCA" />
          </Tooltip>

          <Tooltip title='Mai Thị Thanh Thúy 2'>
            <Avatar alt="Mai Thị Thanh Thúy 2" src="https://media.licdn.com/dms/image/D5603AQHG5raebuCnBA/profile-displayphoto-shrink_800_800/0/1677594302126?e=1707955200&v=beta&t=BHPLOHaGrPpgkNCE2PlR0DLnB334M1vZmiZ8jLD9oCA" />
          </Tooltip>

          <Tooltip title='Mai Thị Thanh Thúy 3'>
            <Avatar alt="Mai Thị Thanh Thúy 3" src="https://media.licdn.com/dms/image/D5603AQHG5raebuCnBA/profile-displayphoto-shrink_800_800/0/1677594302126?e=1707955200&v=beta&t=BHPLOHaGrPpgkNCE2PlR0DLnB334M1vZmiZ8jLD9oCA" />
          </Tooltip>

          <Tooltip title='Mai Thị Thanh Thúy 4'>
            <Avatar alt="Mai Thị Thanh Thúy 4" src="https://media.licdn.com/dms/image/D5603AQHG5raebuCnBA/profile-displayphoto-shrink_800_800/0/1677594302126?e=1707955200&v=beta&t=BHPLOHaGrPpgkNCE2PlR0DLnB334M1vZmiZ8jLD9oCA" />
          </Tooltip>

          <Tooltip title='Mai Thị Thanh Thúy 5'>
            <Avatar alt="Mai Thị Thanh Thúy 5" src="https://media.licdn.com/dms/image/D5603AQHG5raebuCnBA/profile-displayphoto-shrink_800_800/0/1677594302126?e=1707955200&v=beta&t=BHPLOHaGrPpgkNCE2PlR0DLnB334M1vZmiZ8jLD9oCA" />
          </Tooltip>
        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar