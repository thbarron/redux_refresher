import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Tasks from './app/features/Tasks';
import { createTask } from './app/actions'



class App extends Component {
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  }


  render() {
    console.log('props from App: ', this.props)
    return (
      <div className="main-content">
        <Tasks
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}


export default connect(mapStateToProps)(App);
