import { Stack, Typography, useMediaQuery } from '@mui/material';

// MUI Icons
import EvStationIcon from '@mui/icons-material/EvStation';

const HomePage = () => {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <Stack
      sx={{ height: 'calc(100vh - 100px)' }}
      alignItems="center"
      justifyContent="center">
      <Stack
        direction={matches ? 'row' : 'column'}
        alignItems="center"
        columnGap={2}>
        <EvStationIcon sx={{ fontSize: '100px' }} />
        <Typography
          variant={matches ? 'h3' : 'h4'}
          textAlign="center"
          component="h2"
          fontWeight="bold">
          API Station
        </Typography>
      </Stack>
      <Typography variant="body2" component="p" textAlign="center">
        list of thousands of usable <strong>Public API's</strong> for developers
      </Typography>

      {/* <Typography variant="body2" component="p" mt={2}>
        Create and build with love by Edwin Tantawi
      </Typography> */}
      {/* <ul>
        <li>
          [ Frontend Build by ]{' '}
          <Link href="https://edwintantawi.vercel.app/" target="__blank">
            Edwin Tantawi
          </Link>
        </li>
        <li>
          [ APIs source by ]{' '}
          <Link href="https://api.publicapis.org/" target="__blank">
            PublicAPIs
          </Link>
        </li>
      </ul> */}
    </Stack>
  );
};

export { HomePage };
