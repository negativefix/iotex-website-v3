import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Developers } from './pages/Developers';
import { Team } from './pages/Team';
import { Advanced } from './pages/Advanced';
import { Investors } from './pages/Investors';
import { useStore } from '@/store/index';
import { customTheme } from './lib/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Enterprise from "./pages/Enterprise";
import Faq from "./pages/Faq/Faq";
import { Research } from './pages/Research'
import MediaCenter from "./pages/MediaCenter";
import Pebble from "./pages/Pebble";

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
	        <Route path='/faq' exact component={Faq}/>
	        <Route path='/team' exact component={Team}/>
          <Route path="/enterprise" exact component={Enterprise} />
          <Route path="/research" exact component={Research} />
          <Route path="/media-center" exact component={MediaCenter} />
          <Route path="/pebble" exact component={Pebble} />
          <Route path="/advanced" exact component={Advanced} />
          <Route path="/investors" exact component={Investors} />
        </Switch>
      </Router>
    </ChakraProvider>
	);
});

export default App;
