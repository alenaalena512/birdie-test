import * as React from 'react';
import styled from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';
import { fetchCareRecipients, fetchEvents } from '@App/store/actions';
import InfoTable from './InfoTable';

interface AppProps {
  fetchCareRecipients: Function;
  fetchEvents: Function;
  events: any[];
  careRecipients: any[];
}

interface AppState {
  clients: string[];
}

const List = styled.div`
    width: 800px;
`;

class InfoZone extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);

  }

  public render() {
    return (
      <>
        <h1>Recent Visits</h1>
        <List>
          <InfoTable events={this.props.events} />
        </List>
      </>
    );
  }
}

const mapStateToProps = (state: RootState): { events: any, careRecipients: any } => ({
  events: state.events,
  careRecipients: state.careRecipients
});

export default connect(mapStateToProps, { fetchCareRecipients, fetchEvents: fetchEvents })(InfoZone);