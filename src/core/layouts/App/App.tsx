import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import StoriesPage from 'story/pages/StoriesPage';
import theme from 'core/services/theme';
import { Container } from 'core/atoms';
import Styles from './styles';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StoriesPage />
        <Styles />
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
