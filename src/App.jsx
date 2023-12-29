import { AuthProvider } from './AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import NextPage from './pages/NextPage';
import StartPage from './pages/StartPage';
import NavBar from './components/Navbar';

const App = () => {
  const [openFormatter, setOpenFormatter] = React.useState(false);

  return (
    <AuthProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <NavBar setOpenFormatter={setOpenFormatter} />
            <Routes>
              <Route
                path="/next-page"
                element={
                <ProtectedRoute>
                  <NextPage
                    openFormatter={openFormatter}
                    setOpenFormatter={setOpenFormatter}
                  />
                </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/"
                element={
                <ProtectedRoute>
                  <StartPage
                    openFormatter={openFormatter}
                    setOpenFormatter={setOpenFormatter}
                  />
                </ProtectedRoute>
                }
              />
              <Route exact path="/login" element={<LoginPage />} />
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
