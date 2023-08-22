import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineBars3 } from 'react-icons/hi2'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded'
import { FolderSpecialRounded } from '@mui/icons-material'
import { BookOnlineRounded } from '@mui/icons-material'
import { CallOutlined } from '@mui/icons-material'
import Steak from '../Assets/steak.png'
import './Navbar.css'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const menuOptions = [
    {
      text:'Home',
      icon:<HomeIcon/>,
      link: '#myHome'
    },
    {
      text:'About',
      icon:<InfoIcon/>,
      link: '#myAbout'
    },
    {
      text:'Special Offers',
      icon:<FolderSpecialRounded/>
    },
    {
      text:'Menu',
      icon:<MenuBookRoundedIcon/>
    },
    {
      text:'Testimonials',
      icon:<CommentRoundedIcon/>
    },
    {
      text:'Reservations',
      icon:<BookOnlineRounded/>
    }
  ]

  return (<div className='navbar'>
    <div className="navbar-container">
        <h2 className='logo'><span><img src={Steak} alt='logo' className='steak-slice'/></span>SmokeTheme</h2>
        <div className='navbar-links-container'>
          <a href="#myHome" className='link'>Home</a>
          <a href="#myAbout" className='link'>About</a>
          <a href="#mySpecials" className='link'>Special Offers</a>
          <a href="#myMenu" className='link'>Menu</a>
          <a href="#myTes" className='link'>Testimonials</a>
          <button className='tel'><a href="tel:+234-910-819-8161"><CallOutlined className='tel-icon'/></a></button>
        </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} style={{color: 'white', zIndex: 30}}/>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box
          sx={{ width: 270, height: '100%' }}
          role='presentation'
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
          style = {{color: 'white', backgroundColor: '#141414'}}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem disablePadding>
                <ListItemButton style={{borderBottom: '1px solid white'}}>
                  <ListItemIcon style={{color: 'white'}}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider/>
        </Box>
      </Drawer>
    </div>
  </div>
  )
}

export default Navbar