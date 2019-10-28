import React, { Component } from "react";

export default class AddTutorial extends Component {
  state = {
    label: "",
    tagLink: "",
    value: ""
  };

  changeValues = event => {
    let newValue = event.target.value;
    this.setState({ [event.target.name]: newValue });
  };

  render() {
    const { addtag } = this.props;

    return (
          <div class="mt-2 ">
      
        <h3>Add Tags</h3>
        {/* <input
          name="label"
          placeholder="Tag Name"
          value={this.state.label}
          onChange={this.changeValues}
        />
        <input
          name="tagLink"
          placeholder="Tutorial Link"
          value={this.state.tagLink}
          onChange={this.changeValues}
        /> */}
        <div class="input-group mt-2 ">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">
              Tutorial Title
            </span>
          </div>
          <input
            required
            name="label"
            placeholder="Tag Name"
            value={this.state.label}
            onChange={this.changeValues}
          
            type="text"
            class="form-control"
          />
        </div>

        <div class="input-group mt-2 ">
          <div class="input-group-prepend">
            <span class="input-group-text" id="">
              Tutorial Title
            </span>
          </div>
          <input
            required
            name="tagLink"
            placeholder="Tutorial Link"
            value={this.state.tagLink}
            onChange={this.changeValues}
          
            type="text"
            class="form-control"
          />
        </div>

        <button
        className=" btn btn-outline-info  waves-effect mt-2 col-md-2 "
          onClick={() => {
            addtag({
              label: this.state.label,
              tagLink: this.state.tagLink,
              value: this.state.label
            });

            this.setState({
              label: "",
              tagLink: "",
              value: ""
            });
          }}
        >
          Add New Tag
        </button>
      </div>
    );
  }
}
