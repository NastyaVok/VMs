import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import HomeIcon from '@mui/icons-material/Home';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ViewStreamIcon from '@mui/icons-material/ViewStream';

export const Navbar = () => {
  const [open, setOpen] = React.useState(true);
  
  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <List
      sx={{ width: '100%', maxWidth: 230, bgcolor: 'background.paper', '@media (max-width: 930px)': {
        display: 'none',
      } }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
            Меню навигации
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Дашборд" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <ViewStreamIcon />
        </ListItemIcon>
        <ListItemText primary="CMDB" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div">
          <ListItemButton sx={{ pl: 4 }} selected>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Серверы и ПК"/>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Гипервизоры и вирт. машины" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Принтеры и МФУ" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Сетевые устройства" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <CompassCalibrationIcon />
        </ListItemIcon>
        <ListItemText primary="Сеть" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LocalLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Справочники" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="Отчеты" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <MonitorHeartIcon />
        </ListItemIcon>
        <ListItemText primary="Мониторинг" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BrightnessHighIcon />
        </ListItemIcon>
        <ListItemText primary="Автоматизация" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ImportantDevicesIcon />
        </ListItemIcon>
        <ListItemText primary="Администрирование" />
      </ListItemButton>
    </List>
  );
};