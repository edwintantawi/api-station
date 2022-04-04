import { Container } from '@mui/material';

import { AppBar } from './components/AppBar';

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar title={'API Station'} />
    </Container>
  );
};

export default App;
