// MUI
import { Container, Grid, Stack, useMediaQuery } from '@mui/material';

// MUI Icons
import EvStationIcon from '@mui/icons-material/EvStation';

// Components
import { AppBar } from './components/AppBar';
import { SideBar } from './components/SideBar';
import Main from './components/Main';

const App = () => {
  const matches = useMediaQuery('(min-width: 600px)');

  return (
    <Container maxWidth="lg" sx={{ position: 'relative' }}>
      <Stack minHeight="100vh">
        <AppBar title={'API Station'} icon={<EvStationIcon />} />
        <Grid container spacing={matches ? 2 : 0}>
          <Grid item sm={4} md={3} order={matches ? 'initial' : 2}>
            <SideBar />
          </Grid>
          <Grid item xs={12} sm={8} md={9} order={matches ? 'initial' : 1}>
            <Main />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default App;
