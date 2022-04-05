import {
  Button,
  Link,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';

// MUI Icons
import EvStationIcon from '@mui/icons-material/EvStation';
import { useAppDispatch } from '../hooks/redux.hook';
import { toggleDrawer } from '../redux/slices/ui.slice';

const HomePage = () => {
  const matchesMd = useMediaQuery('(min-width: 900px)');
  const matchesSm = useMediaQuery('(min-width: 600px)');
  const dispatch = useAppDispatch();

  return (
    <Stack
      sx={{ height: 'calc(100vh - 100px)' }}
      alignItems="center"
      justifyContent="center">
      <Stack
        direction={matchesMd ? 'row' : 'column'}
        alignItems="center"
        columnGap={2}>
        <EvStationIcon sx={{ fontSize: '100px' }} />
        <Typography
          variant={matchesMd ? 'h3' : 'h4'}
          textAlign="center"
          component="h2"
          fontWeight="bold">
          API Station
        </Typography>
      </Stack>
      <Typography variant="body2" component="p" textAlign="center">
        list of thousands of usable <strong>Public API's</strong> for developers
      </Typography>
      <Paper variant="outlined" sx={{ px: 4, py: 2, mt: 2 }}>
        <Stack>
          <Typography variant="body2" component="p" textAlign="center">
            [ Frontend Build by ]{' '}
            <Link href="https://edwintantawi.vercel.app/" target="__blank">
              Edwin Tantawi
            </Link>
          </Typography>

          <Typography variant="body2" component="p" textAlign="center">
            [ APIs source by ]{' '}
            <Link href="https://api.publicapis.org/" target="__blank">
              PublicAPIs
            </Link>
          </Typography>
        </Stack>
      </Paper>
      {!matchesSm ? (
        <Button
          variant="contained"
          disableElevation
          sx={{ marginTop: 2 }}
          onClick={() => dispatch(toggleDrawer())}>
          Get started
        </Button>
      ) : null}
    </Stack>
  );
};

export { HomePage };
