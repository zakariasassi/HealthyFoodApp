import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Sidebar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      dir='rtl'
    >
<List>
    <span style={{fontSize:20 , margin:20}} >الادارة </span>
    {['ادارة المستخدمين', 'مدراء النظام', 'اضافة مديو نظام', 'اضافة مستخدم'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary={text} style={{ textAlign: 'right' }} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

      <Divider />
      <List>
    <span style={{fontSize:20 , margin:20}} >الادارة </span>
    {['التصنيفات', 'اضافة تصنيف', 'اضافة اكلة', 'اضافة معلومات عامة'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary={text} style={{ textAlign: 'right' }} />
      </ListItemButton>
    </ListItem>
  ))}
</List>
    </Box>
  );

  return (
    <div>
          <Drawer
            
            anchor={'right'}
            open={state}
            hideBackdrop={true}
            onClose={toggleDrawer('right: ', false)}
            variant="permanent"
            >
            {list('right')}
          </Drawer>
    </div>
  );
}
