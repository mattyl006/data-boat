import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import NextPage from './pages/NextPage';
import StartPage from './pages/StartPage';
import NavBar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/next-page" element={<NextPage />} />
          <Route exact path="/" element={<StartPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
