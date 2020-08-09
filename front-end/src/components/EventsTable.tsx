import * as React from 'react';

interface AppProps {
    events: any[];
}

interface AppState {
}

const data = (e: any) => {
    switch (e.event_type) {
        case 'fluid_intake_observation':
            return `Fluid: ${e.fluid}, Volume: ${e.consumed_volume_ml}`;
        case 'food_intake_observation':
            return `Food intake: ${e.note}`;
        case 'task_completed':
            return `Task completed: ${e.task_definition_description}`;
        case 'task_completion_reverted':
            return `Task reverted: ${e.task_definition_description}`;
        case 'physical_health_observation':
            return `Physical health observation: ${e.note}`;
        case 'mood_observation':
            return `Mood observation: ${e.mood}`;
        default: 
            return `${e.event_type.replace(/_/g, ' ')}`;
    }
};

class EventsTable extends React.Component<AppProps, AppState> {
    public constructor(props: AppProps) {
        super(props);
    }

    public render() {
        return (
            <div>{this.props.events.map((e: any) => <p key={e.id}>{data(e)}</p>)}</div>
        );
    }
}

export default EventsTable;