import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Developers } from './pages/Developers';
import { useStore } from '@/store/index';
import { customTheme } from './lib/theme';
import { ChakraProvider } from '@chakra-ui/react';

export const App = observer(() => {
	const { lang } = useStore();
	useEffect(() => {
		lang.init();
	}, []);
	return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/developers" exact component={Developers} />
        </Switch>
      </Router>
    </ChakraProvider>
	);
});

export default App;
