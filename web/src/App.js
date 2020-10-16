import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '@/pages/Main';
import Create from '@/pages/Create';
import Solve from '@/pages/Solve';
import Login from '@/pages/Login';
import Welcome from '@/pages/Welcome';
import Result from './pages/Result';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/create" component={Create} />
        <Route path="/login" component={Login} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/solve/:id" component={Solve} />
        <Route path="/result/:id" component={Result} />
      </Switch>

      <style jsx global>{`
        body {
          padding: 0;
        }
      `}</style>
    </BrowserRouter>
  );
};

export default App;
