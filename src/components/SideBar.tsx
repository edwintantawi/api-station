import {
  Alert,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Skeleton,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { useAppDispatch, useAppState } from '../hooks/redux.hook';

import { useGetPublicApiCategoriesQuery } from '../services/publicApiService';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { toggleDrawer } from '../redux/slices/ui.slice';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import { forwardRef, useMemo } from 'react';

interface ListItemLinkProps {
  primary: String;
  to: String;
}

const SideBar = () => {
  const { data, isLoading, isError } = useGetPublicApiCategoriesQuery(null);
  const matches = useMediaQuery('(min-width: 600px)');
  const { drawer } = useAppState((state) => state.ui);
  const dispatch = useAppDispatch();

  const ListLinkItem = ({ primary, to }: ListItemLinkProps) => {
    const renderLink = useMemo(
      () =>
        forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(
          (itemProps, ref) => {
            return (
              <RouterLink
                to={to.valueOf()}
                ref={ref}
                {...itemProps}
                role="link"
                onClick={() => dispatch(toggleDrawer())}
              />
            );
          }
        ),
      [to]
    );

    return (
      <li>
        <ListItemButton component={renderLink} sx={{ py: 2 }}>
          {primary}
        </ListItemButton>
      </li>
    );
  };

  return (
    <Box
      sx={{
        height: matches ? 'calc(100vh - 65px)' : 'auto',
        overflow: 'auto',
        position: 'sticky',
        top: '64px',
      }}>
      <Drawer
        PaperProps={{
          sx: {
            position: 'static',
            width: '100%',
          },
        }}
        open={drawer}
        variant={matches ? 'permanent' : 'temporary'}
        anchor="left">
        {!matches ? (
          <Toolbar
            sx={{
              borderBottom: '1px solid lightgray',
              position: 'sticky',
              top: '0',
              zIndex: 9,
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              onClick={() => dispatch(toggleDrawer())}>
              <ArrowBackIosNewIcon />
            </IconButton>
          </Toolbar>
        ) : null}
        <List>
          {isLoading ? (
            new Array(20).fill(0).map((_, index) => (
              <ListItem button key={index}>
                <Skeleton
                  animation="wave"
                  variant="text"
                  width="100%"
                  height="38px"
                />
              </ListItem>
            ))
          ) : isError ? (
            <Alert severity="error">
              Ooops.. something went wrong, please try to refresh this page
            </Alert>
          ) : (
            data?.categories.map((category, index) => (
              <ListLinkItem
                key={index}
                to={`/categories/${category}`}
                primary={category}
              />
            ))
          )}
        </List>
      </Drawer>
    </Box>
  );
};

export { SideBar };
