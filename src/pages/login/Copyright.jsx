import React from 'react'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const Copyright = (props) => {
  return (
    <>
      <Typography variant="body2"
        color="text.secondary"
        align="center"
        marginBottom={'10px'}
        fontFamily="fantasy"
        fontSize={'20px'}
        {...props}>
        {'Powered By '}
      </Typography>
      <Link color="#890ab4" href="https://www.goit.ps/">
        <img
        alt='GoIT'
          width={'120px'}
          src={process.env.PUBLIC_URL + '/images/goIt.png'}
        />
      </Link>
    </>
  )
}
