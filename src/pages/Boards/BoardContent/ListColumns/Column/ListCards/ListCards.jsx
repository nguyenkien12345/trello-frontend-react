import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards({ cards }) {
  const showCards = cards?.map((card) => <Card key={card._id} card={card}/>)

  return (
    <Box sx={{
      // Start Tip tricks scrollbar (Bắt buộc phải có padding và margin)
      p: '0 5px',
      m: '0 5px',
      // End Tip tricks scrollbar
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
				${theme.trello.boardContentHeight} - 
				${theme.spacing(5)} - 
				${theme.trello.columnHeaderHeight} - 
				${theme.trello.columnFooterHeight}
			)`,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#bfc2cf'
      }
    }}>

      {showCards}

    </Box>
  )
}

export default ListCards