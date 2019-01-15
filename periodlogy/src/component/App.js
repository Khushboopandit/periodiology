import React, { Component } from 'react';
import Home from './home'
import AddCrads from './addCards'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      open: false,
      question: '',
      description: '',
      video: '',
      article: '',
    }
  }

  openAddPage=()=>{
    this.setState({open: true})
  }

  handleChange = prop => event => {
    this.setState({ question: event.target.value,description: event.target.value,article: event.target.value,video: event.target.value });
  }

  postPeriodData=()=>{
        const {question,description,video,article} =  this.state
        const data = {
            "question": question,
            "des": description,
            "url_video": video,
            "url_article": article,  
        }

    fetch('http://127.0.0.1:4000/create_new_question', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        console.log(res)
        // return res.json();
    })
    .then(res => console.log(res))
    // .catch(err => err);
    this.setState({open: false})
  }

  render() {
    const {open} = this.state
    return (
      <div className="App">
        {open===true? 
          <AddCrads/>:
          <Home openAddPage={this.openAddPage} postPeriodData = {this.postPeriodData} handleChange={this.handleChange} {...this.state}/> 
        }
      </div>
    );
  }
}

export default App;
