import { ThemeProvider } from '@material-ui/core';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import routes from 'src/routes';
import theme from 'src/theme';
import SuperTokens from 'supertokens-auth-react';
import Session from 'supertokens-auth-react/recipe/session';
import ThirdPartyEmailPassword, {
  Facebook,
  Github,
  Google,
  ThirdPartyEmailPasswordAuth
} from 'supertokens-auth-react/recipe/thirdpartyemailpassword';

SuperTokens.init({
  appInfo: {
    appName: '',
    apiDomain: 'localhost:4000',
    websiteDomain: 'localhost:3000'
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [Github.init(), Google.init(), Facebook.init()]
      }
    }),
    Session.init()
  ]
});

const App = () => {
  const routing = useRoutes(routes);
  // if (SuperTokens.canHandleRoute()) {
  //   return SuperTokens.getRoutingComponent();
  // }

  return (
    // <ThirdPartyEmailPasswordAuth>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    // </ThirdPartyEmailPasswordAuth>
  );
};

export default App;
