import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    inputValue: this.props.status
  };
  toggleEditMode = () => {
    this.setState({editMode: !this.state.editMode});
    this.props.updateStatus(this.state.inputValue);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(prevProps.status !== this.state.status){
      this.setState({
        status:this.props.status
      })
    }
  }

  inputValueChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    return (
      <div>

        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.toggleEditMode}>Status: {this.props.status || 'NO status'}</span>
        </div>
        }

        {this.state.editMode &&
        <div>
          <input autoFocus={true}
                 onBlur={this.toggleEditMode}
                 onChange={this.inputValueChange}
                 value={this.state.inputValue}/>
        </div>
        }
      </div>)
  }

}

export default ProfileStatus