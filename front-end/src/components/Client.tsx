import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchEvents, fetchCareRecipients } from '@App/store/actions';
const { UserOutlined } = require('@ant-design/icons');
import 'antd/dist/antd.css';
const { Button } = require('antd');

interface AppProps {
  fetchCareRecipients: Function;
  fetchEvents: Function;
  careRecipients: [];
}

interface AppState {
}

const ClientsList = styled.div`
    display: block
`;

class Client extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCareRecipients();
  }

  processClick(r: string) {
    this.props.fetchEvents(r);
  }

  public render() {
    return (
      <>
        <ClientsList>
          {this.props.careRecipients.map((r: any) =>
            <Button key={r} block={true} onClick={() => this.processClick(r)}> <UserOutlined /> {r.slice(0, 5)}</Button>
          )}
        </ClientsList>
      </>
    );
  }
}

const mapStateToProps = (state: any): { careRecipients: any } => ({
  careRecipients: state.careRecipients
});

export default connect(mapStateToProps, { fetchEvents: fetchEvents, fetchCareRecipients })(Client);
