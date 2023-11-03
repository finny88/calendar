import React from 'react'
import Box from '@mui/material/Box'
import ProTip from 'protipapp/ProTip'
import Copyright from 'copyrightapp/Copyright'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(theme => ({
  box: {
    margin: theme.spacing(4, 0),
  },
}))

export default function App() {
  const { classes } = useStyles()

  return (
    <Container maxWidth="sm">
      <Box className={classes.box}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example in TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
