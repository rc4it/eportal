import React from 'react'
import {Container, Jumbotron, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class EventView extends React.Component{
    constructor(props){
        super(props)
        console.log(props.match)
        this.state = {
            id : this.props.match.params.id,
            event : {},
        }
    }
    
    componentDidMount(){
        var url = `http://127.0.0.1:8000/api/view/${this.state.id}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                event: data
            })
        })
    }

    render(){
        var start = new Date(this.state.event.start).toString()
        var end = new Date(this.state.event.end).toString()
        return(
            <div>
            <Container>
            <Jumbotron>
                <h1>{this.state.event.title}</h1>
                <br></br>
                
                <div>
                    <h5>Event Start</h5>
                    <p>
                        Date : {start}
                    </p>
                    <br></br>
                </div>
                
                <div>
                    <h5>Event End</h5>
                    <p>
                        Date : {end}
                    </p>
                    <br></br>
                </div>

                {this.state.event.allday && <div><h6 className="text-success">This is an allday event.</h6><br></br></div>}

                <Link to="/calendar">
                    <Button variant="primary">Home</Button>
                </Link>
            </Jumbotron>
            </Container>
            </div>
            

            
            
        )
    }
}

export default EventView