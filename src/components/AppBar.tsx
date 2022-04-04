import { FC, ReactNode } from 'react';
import {
  AppBar as MaterialAppBar,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { useAppDispatch } from '../hooks/redux.hook';
import { toggleDrawer } from '../redux/slices/ui.slice';

import { Link as RouterLink } from 'react-router-dom';

interface AppBarProps {
  title: String;
  icon: ReactNode;
}

const AppBar: FC<AppBarProps> = ({ title, icon }) => {
  const dispatch = useAppDispatch();
  const matches = useMediaQuery('(min-width: 600px)');

  return (
    <MaterialAppBar
      position="sticky"
      elevation={0}
      sx={{
        borderBottom: '1px solid lightgray',
        backgroundColor: 'white',
        color: 'black',
      }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link component={RouterLink} to="/" underline="none">
          <Stack direction="row" alignItems="center" color="black">
            {icon}
            <Typography
              variant="h6"
              component="h1"
              fontWeight="bold"
              marginLeft={1}>
              {title}
            </Typography>
          </Stack>
        </Link>
        {!matches ? (
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={() => dispatch(toggleDrawer())}>
            <MenuIcon />
          </IconButton>
        ) : null}
      </Toolbar>
    </MaterialAppBar>
  );
};

export { AppBar };
