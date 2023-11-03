import React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => ({
  root: {
    color: theme.palette.primary.main,
  },
}))

export default function Copyright() {
  const { classes } = useStyles()

  return (
    <Typography variant="body2" className={classes.root} align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}
