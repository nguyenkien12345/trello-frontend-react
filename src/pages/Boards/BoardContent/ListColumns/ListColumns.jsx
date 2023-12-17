import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

function ListColumns({ columns }) {
  const showColumns = columns?.map((column) => <Column key={column._id} column={column} />)

  return (
    <Box sx={{
      // Trick xử lý scrollbar
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      // Thanh scrollbar sẽ cách đều 4 góc 16px (1 = 8px)
      '&::-webkit-scrollbar-track': { m: 2 }
    }}
    >

      {showColumns}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor: '#ffffff3d'
      }}
      >
        <Button 
          startIcon={<NoteAddIcon fontSize='small' />}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}>
          Add new column
        </Button>
      </Box>

    </Box>
  )
}

export default ListColumns