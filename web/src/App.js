import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '@/pages/Main';
import Create from '@/pages/Create';
import Solve from '@/pages/Solve';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/create" exact component={Create} />
        <Route path="/solve" exact component={Solve} />
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
