import React from 'react';
import ContextProvider from './context/Context';

import { UIProvider } from 'react-native-web-ui-components';
import createHistory from './utils/createHistory';
import EntryScreen from './screens';
import theme from './theme';
import Router from './components/Router';
import Switch from './components/Switch';
import BottomBar from './components/BottomBar';

const history = createHistory();

const App = props => (
  <ContextProvider>
    <Router history={history}>
      <Switch history={history} gestureEnabled={false}>
        <UIProvider theme={theme} history={history}>
          <EntryScreen {...props} />
        </UIProvider>
      </Switch>
    </Router>
  </ContextProvider>
);

export default App;
