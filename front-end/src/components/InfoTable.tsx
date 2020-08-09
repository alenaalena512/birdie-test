import * as React from 'react';
import EventsTable from './EventsTable';
const { Collapse, Pagination } = require('antd');
const { DateTime } = require('luxon');
const { Panel } = Collapse;
import { groupBy, Dictionary } from 'lodash';

interface AppProps {
  events: any[];
}

interface AppState {
  currentPage: number;
  offset: number;
}

class InfoTable extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props);
    this.state = { currentPage: 1, offset: 0 };
  }

  onChange = (page: number, pageSize: number) => {
    this.setState({
      currentPage: page,
      offset: (page - 1) * pageSize
    });
  }

  public render() {

    const visitsById: Dictionary<any> = groupBy(this.props.events, 'visit_id');
    const visits = Object.keys(visitsById).map(k => visitsById[k]);
    const pageSize = 10;
    const formatTime = (time: string) => {
      return DateTime.fromISO(time)
        .setLocale('en')
        .toFormat('ff');
    };

    let contents;
    if (this.props.events.length === 0) {
      contents = <p>Please select a care receiver</p>;
    } else {
      contents = (
        <>
          {visits.slice(this.state.offset, Math.min(this.state.offset + pageSize, visits.length)).map(events => {

            return (
              <Collapse key={events[0].visit_id} defaultActiveKey={['0']}>
                <Panel header={formatTime(events[0].timestamp)} key="1">
                  <EventsTable events={events} />
                </Panel>
              </Collapse>
            );
          })}
          <br />
          <Pagination
            current={this.state.currentPage}
            onChange={this.onChange}
            showSizeChanger={false}
            pageSize={pageSize}
            total={visits.length}
          />
        </>
      );
    }

    return (
      <>
        {contents}
      </>
    );
  }
}

export default InfoTable;