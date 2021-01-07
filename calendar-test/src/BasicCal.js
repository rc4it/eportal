import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Redirect} from 'react-router-dom'

const localizer = momentLocalizer(moment)
class BasicCal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            events: []
        }
        this.eventClicked = this.eventClicked.bind(this);
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api')
        .then(response=>response.json())
        .then(data=>{
            var checkevents = data.map(function(event, index){
                return ({
                    id : event.id,
                    title : event.title,
                    allday : event.allday,
                    start : new Date(event.start),
                    end: new Date(event.end),
                })
            })
            this.setState({
                events: checkevents,
            })
        })
    }

    eventClicked(event){
        window.location.href = `/event/${event.id}`;
    }


    render(){
        console.log(this.state.events)
        return(
            <div>
                <Calendar
                localizer={localizer}
                onSelectEvent={event => {
                    this.eventClicked(event);
                }}
                events={this.state.events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 800 }}
                />
            </div>
        )
    }
}

export default BasicCal