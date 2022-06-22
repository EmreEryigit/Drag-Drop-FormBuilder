import React from 'react';
import { ReactFormBuilder, ElementStore } from 'react-form-builder2';

import { get, post } from './requests';


// const content = [
//   {
//     id: 'C68B673B-3948-4D62-AF6D-5320CAB4DDB7',
//     element: 'TextInput',
//     text: 'Text Input',
//     required: true,
//     canHaveAnswer: true,
//     field_name: 'text_input_EEA6F5DA-5C2C-43D3-AB62-62385E3925D9',
//     label: '<div>Name</div>\n',
//   },
//   {
//     id: '6DAF1E95-44F6-4E5B-ABDD-D9A6BCA2C08A',
//     element: 'TextInput',
//     text: 'Text Input',
//     required: true,
//     canHaveAnswer: true,
//     field_name: 'text_input_C5305462-9704-4E77-BFAB-A43C14AB2B8E',
//     label: '<div>Email</div>\n',
//   },
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formId: '1' };
    this.formId = this.state.formId;
  }

  formId;

 

  render() {
    return (
      <div className="App">
        
        <ReactFormBuilder
          // data={content}
          onLoad={this.onLoad}
          onPost={this.onPost}
        />,
      </div>
    );
  }
}

export default App;

