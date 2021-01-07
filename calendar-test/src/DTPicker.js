import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";

class DTPicker extends React.Component {
  constructor(props){
    super(props);
    this.state={
      start : ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value
    this.setState({
      [name]: value,
    })
  }

  render() {
    let inputProps = {
      id : this.props.name,
      name : this.props.name,

    }
    return <Datetime dateFormat = "DD/MM/YYYY" timeFormat="HH:mm" inputProps={} />;
  }
}

export default DTPicker