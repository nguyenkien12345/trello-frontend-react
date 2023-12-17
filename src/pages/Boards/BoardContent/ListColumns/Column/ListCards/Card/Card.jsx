import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Card as CardMui } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Card() {
  return (
    <CardMui sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/293047117_837343830565535_2044867876227371680_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=a73e89&_nc_ohc=kLwq63mSfSQAX8EZeqo&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfAQpXDceIhTpFnrOKquP9xDq-zm7CCO_sajZps60jZwgw&oe=65837EF0"
        title="Mai Thị Thanh Thúy tốt nghiệp"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Mai Thị Thanh Thúy</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<CommentIcon />}>15</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
      </CardActions>
    </CardMui>
  )
}

export default Card