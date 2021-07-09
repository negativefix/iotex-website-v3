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
import { EmailPopup } from './components/EmailPopup'
import { hotjar } from 'react-hotjar';

hotjar.initialize(2494554, 6);

export const App = observer(() => {
	const { lang } = useStore();
	useEffect(() => {
		lang.init();
	}, []);
	return (
    <ChakraProvider theme={customTheme}>
      <EmailPopup />
      <Router>
        <Switch>
          <Route path="/" onEnter={()=>{document.title='标题'}} exact component={Home} />
          <Route path="/developers"  component={Developers} />
	        <Route path='/faq'  component={Faq}/>
	        <Route path='/team'  component={Team}/>
          <Route path="/enterprise"  component={Enterprise} />
          <Route path="/research"  component={Research} />
          <Route path="/media-center"  component={MediaCenter} />
          <Route path="/pebble"  component={Pebble} />
          <Route path="/advanced"  component={Advanced} />
          <Route path="/investors"  component={Investors} />
        </Switch>
      </Router>
    </ChakraProvider>
	);
});

export default App;
