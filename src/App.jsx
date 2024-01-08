import LoginPage from './pages/LoginPage';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import NextPage from './pages/NextPage';
import StartPage from './pages/StartPage';
import NavBar from './components/Navbar';
import { useSelector } from 'react-redux';

const App = () => {
  const [openFormatter, setOpenFormatter] = React.useState(false);
  const token = useSelector((state) => state.authorize.token);

  return (
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <NavBar setOpenFormatter={setOpenFormatter} />
            <Routes>
              <Route
                path="/next-page"
                element={
                  <NextPage
                    openFormatter={openFormatter}
                    setOpenFormatter={setOpenFormatter}
                  />
                }
              />
              {token === "" ?  <Route exact path="/" element={<LoginPage />} /> : <Route
                exact
                path="/"
                element={
                  <StartPage
                    openFormatter={openFormatter}
                    setOpenFormatter={setOpenFormatter}
                  />
                }
              />}
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
  );
};

export default App;
