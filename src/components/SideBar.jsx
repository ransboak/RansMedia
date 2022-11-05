import React, { useState } from 'react'
import {Stack} from '@mui/material'
import {categories} from '../utils/constants'

const SideBar = ({selectedCategory, setSelectedCategory}) => {
 
  return (
    <Stack direction='row'
    sx={{
        overflowY: 'auto',
        height: {sx: 'auto', md: '95%'},
        flexDirection:{md: 'column'}
        }}>
        {
            categories.map(({name, icon}, index) => {
                return(
                    <button 
                    onClick={() => {setSelectedCategory(name)} } 
                    className='category-btn' 
                    style={{background: name === selectedCategory && '#FC1503', color: 'white' }} 
                    key={index}>
                        <span style={{ color: name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{icon}</span>
                        <span style={{ opacity: name === selectedCategory ? '1' : '0.8'}}>{name}</span>
                    </button>
                )
            })
        }
    </Stack>
  )
}

export default SideBar