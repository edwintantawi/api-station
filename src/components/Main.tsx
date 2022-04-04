import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ResultsPage } from '../pages/ResultsPage';

const Main = () => {
  return (
    <Box paddingY={2} flexGrow={1} flex="true" flexDirection="column">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/:category" element={<ResultsPage />} />
      </Routes>
    </Box>
  );
};

export default Main;
