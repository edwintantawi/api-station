import {
  Alert,
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  colors,
  Grid,
  Skeleton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';
import { useGetPublicApisByCategoryQuery } from '../services/publicApiService';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import CachedIcon from '@mui/icons-material/Cached';

const ResultsPage = () => {
  const { category } = useParams();
  const { data, isLoading, isError, refetch } = useGetPublicApisByCategoryQuery(
    category!
  );

  return (
    <>
      <Stack
        justifyContent="flex-end"
        direction="row"
        sx={{
          backgroundColor: colors.grey[100],
          border: '1px solid lightgray',
          borderRadius: '4px',
          zIndex: 8,
          px: 2,
          py: 1,
          mb: 2,
        }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography>categories</Typography>
          <Typography color="text.primary">{category}</Typography>
        </Breadcrumbs>
      </Stack>
      <Stack justifyItems="center" alignItems="center" flexGrow={1}>
        <Grid container spacing={2}>
          {isLoading ? (
            new Array(20).fill(0).map((_, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Skeleton
                  variant="rectangular"
                  height="128px"
                  width="100%"
                  sx={{ borderRadius: '4px' }}
                />
              </Grid>
            ))
          ) : isError ? (
            <>
              <Grid xs={12} item>
                <Alert severity="error">
                  Ooops.. something went wrong, please try to refresh this page
                </Alert>
              </Grid>
              <Grid xs={12} item textAlign="center">
                <Button
                  variant="outlined"
                  startIcon={<CachedIcon />}
                  onClick={() => refetch()}>
                  Try Again
                </Button>
              </Grid>
            </>
          ) : (
            data?.entries.map((api, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardActionArea
                    sx={{ height: '100%' }}
                    LinkComponent="a"
                    href={api.Link.valueOf()}
                    target="__blank">
                    <CardContent sx={{ height: '100%' }}>
                      <Stack
                        sx={{ height: '100%' }}
                        direction="column"
                        justifyContent="space-between"
                        alignItems="flex-start">
                        <Box>
                          <Typography variant="h6" component="h2">
                            {api.API}
                          </Typography>
                          <Typography
                            variant="body1"
                            component="p"
                            color={colors.grey[600]}>
                            {api.Description}
                          </Typography>
                        </Box>
                        <Stack direction="row" spacing={1} mt={2}>
                          <Chip
                            label={api.Auth || 'No Auth'}
                            color={api.Auth ? 'info' : 'success'}
                            size="small"
                            icon={
                              api.Auth ? (
                                <LockOutlinedIcon />
                              ) : (
                                <LockOpenOutlinedIcon />
                              )
                            }
                          />
                          <Chip
                            label={api.HTTPS ? 'HTTPS' : 'HTTP'}
                            color={api.HTTPS ? 'default' : 'error'}
                            size="small"
                            icon={<FlightTakeoffOutlinedIcon />}
                          />
                        </Stack>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
        <Toolbar />
      </Stack>
    </>
  );
};

export { ResultsPage };
