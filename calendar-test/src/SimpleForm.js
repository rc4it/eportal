import React from 'react'
import "react-datetime/css/react-datetime.css";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

class SimpleForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            allday: false,
            start: "",
            end: "",
            description: "",
            location: "",
            repeated: false,
            contact: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleStart = this.handleStart.bind(this)
        this.handleEnd = this.handleEnd.bind(this)
        this.getCookie = this.getCookie.bind(this)
    }

    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    handleStart(event){
        this.setState({
            start: event.format('DD/MM/YYYY HH:mm')
        })
    }
    handleEnd(event){
        this.setState({
            end: event.format('DD/MM/YYYY HH:mm')
        })
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    
    handleSubmit(e){
        e.preventDefault()
        var url="http://127.0.0.1:8000/api/create/"
        const csrftoken = this.getCookie('csrftoken');
        fetch(url, {
            method:"POST",
            headers:{
                'Content-type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(response=> {
            window.location.href="/calendar"
        })
        
    }
    
    render(){
        const startInputProps ={
            name:"start",
            id:"start",
            className:"form-control",
            readOnly:"true"
        }
        const endInputProps ={
            name:"end",
            id:"end",
            className:"form-control",
            readOnly:"true"
        }

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label for="title" className="form-label">Event Name</label>
                        <input type="text" className="form-control" id="title" name="title" value = {this.state.title} onChange={this.handleChange} ></input>
                        <div id="titleHelp" className="form-text">Type in the name of the event.</div>
                    </div>
                    <div className="mb-3">
                        <label for="description" className="form-label">Event Description</label>
                        <textarea className="form-control" id="description" name="description" value = {this.state.description} onChange={this.handleChange} rows="3"></textarea>
                        <div id="descriptionHelp" className="form-text">Type in the description of the event.</div>
                    </div>
                    <div className="mb-3">
                        <label for="location" className="form-label">Event Location</label>
                        <input type="text" className="form-control" id="location" name="location" value = {this.state.location} onChange={this.handleChange} ></input>
                        <div id="locationHelp" className="form-text">Type in the location of the event.</div>
                    </div>
                    <div className="mb-3">
                        <label for="contact" className="form-label">Event Contact</label>
                        <input type="text" className="form-control" id="contact" name="contact" value = {this.state.contact} onChange={this.handleChange} ></input>
                        <div id="contactHelp" className="form-text">Type in the contact info.</div>
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="allday" name="allday" value = {this.state.allday} onChange={this.handleChange}></input>
                        <label className="form-check-label" for="allday">Is the event all day?</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="repeated" name="repeated" value = {this.state.repeated} onChange={this.handleChange}></input>
                        <label className="form-check-label" for="repeated">Is the event repeated?</label>
                    </div>


                    <div className="mb-3">
                        <label for="start" className="form-label">Event Start Datetime</label>
                        <Datetime onChange={this.handleStart} dateFormat = "DD/MM/YYYY" timeFormat="HH:mm" inputProps={startInputProps} />
                        <div id="startHelp" className="form-text">Type in the Event Start Datetime</div>
                    </div>
                    <div className="mb-3">
                        <label for="end" className="form-label">Event End Datetime</label>
                        <Datetime onChange={this.handleEnd} dateFormat = "DD/MM/YYYY" timeFormat="HH:mm" inputProps={endInputProps} />
                        <div id="endHelp" className="form-text">Type in the Event End Datetime</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            
            
        )
    }
}

export default SimpleForm


