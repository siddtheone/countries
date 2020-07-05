import React from 'react';
import Header from './components/Header';
import useCountries from './hooks/useCountries';
import { Container } from './components/Styled';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [isLoading, isError, countries] = useCountries();

  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" />
            <Route exact path="country/:alpha3Code" />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
