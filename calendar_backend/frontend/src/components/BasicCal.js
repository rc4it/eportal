import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import {render} from 'react-dom'
import 'react-big-calendar.css';

const localizer = momentLocalizer(moment)
class BasicCal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            events: []
        }
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
                    startstring : new Date(event.startstring),
                    endstring : new Date(event.endstring),
                })
            })
            this.setState({
                events: checkevents,
            })
        })
    }

    render(){
        console.log(this.state.events)
        return(
            <div>
                <Calendar
                localizer={localizer}
                events={this.state.events}
                startAccessor="startstring"
                endAccessor="endstring"
                style={{ height: 800 }}
                />
            </div>
        )
    }
}

export default BasicCal

const appDiv = document.getElementById('basiccal')
render(<BasicCal />, appDiv)