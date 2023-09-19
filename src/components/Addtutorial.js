import React, { Component } from 'react'
import tutorialDataService from '../services/tutorial.service';

export default class Addtutorial extends Component {
  constructor(props){     //ทำทันที
    super(props);    //ส่งให้คลาสแม่

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      published: false,
      submitted: false
    }
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description
    };

    tutorialDataService.create(data)
      .then( response =>  {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  newTutorial(){
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className='submit-from'>
        {this.state.submitted ? (
          <>
            <h4>You Submitted successfully</h4>
            <button className='btn btn-success' onClick={this.newTutorial}>Add</button>
          </>
        ) : (
          <>
          <div className='form-group'>
            <label htmlFor='title'>Title: </label>
            <input type='text' 
            className='form-control' 
            id='title' value={this.state.title}
            onChange={this.onChangeTitle}
            name='title'
            required />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description: </label>
            <input type='text' 
            className='form-control' 
            id='description' value={this.state.description}
            onChange={this.onChangeDescription}
            name='description'
            required />
          </div>

          <button onClick={this.saveTutorial} className='btn btn-success'>Submit</button>
          </>
        ) }
      </div>
    )
  }
}
