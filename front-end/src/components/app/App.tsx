import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import InfoZone from '@App/components/InfoZone';
import Client from '@App/components/Client';
import 'antd/dist/antd.css';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

interface AppProps {
}

interface AppState {
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F9F9F9;
  }
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Side = styled.div`
  width: 300px;
  height: 100vh;
  padding: 45px;
`;

const Main = styled.div`
  height: 100vh;
  width: calc(100vw - 300px);
  padding: 40px;
  overflow-y: scroll;
`;

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Side>
            <Logo src={LogoUrl} />
            <Client />
          </Side>
          <Main>
            <InfoZone />
          </Main>
        </AppContainer>
      </>
    );
  }
}

export default App;