import { FC } from 'react';
import { AppBar as MaterialAppBar, Toolbar, Typography } from '@mui/material';

interface AppBarProps {
  title: String;
}

const AppBar: FC<AppBarProps> = ({ title }) => {
  return (
    <MaterialAppBar
      position="sticky"
      elevation={0}
      sx={{ borderBottom: '1px solid lightgray' }}>
      <Toolbar disableGutters>
        <Typography variant="h6" component="h1">
          {title}
        </Typography>
      </Toolbar>
    </MaterialAppBar>
  );
};

export { AppBar };
