import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../assets/ransmedialogo.png'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <Stack direction='row' 
    aligItems='center' 
    p={2} 
    sx={{ position: 'sticky', background: '#000', top: '0', justifyContent: 'space-between'}}>
      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
        <img src={Logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar