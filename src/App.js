import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Tasks from './app/features/Tasks';
import { createTask, updateTask, deleteTask } from './app/actions'



class App extends Component {
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  }

  onUpdateTask = ({ id, title, description, status }) => {
    this.props.dispatch(updateTask({ id, title, description, status }));
  }

  onDeleteTask = ({ id }) => {
    this.props.dispatch(deleteTask({ id }))
  }



  render() {
    console.log('props from App: ', this.props)
    return (
      <div className="main-content">
        <Tasks
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onUpdateTask={this.onUpdateTask}
          onDeleteTask={this.onDeleteTask} />
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
