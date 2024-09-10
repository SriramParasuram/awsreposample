import React, { Component } from 'react';
import Main from './Main';
import {
  cyan500, cyan700, green500,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import './MDC.sass'
// import '../node_modules/material-components-web/dist/material-components-web.css';
import './App.css';

var supportsOrientationChange = "onorientationchange" in window, orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function () {
  document.getElementById('body').style.height = window.innerHeight + 'px';
}, false);

const muiTheme = getMuiTheme({
  // palette: {
  //   textColor: 'green',
  // },
  palette: {
    primary1Color: green500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: green500,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    pickerHeaderColor: cyan500,
    shadowColor: fullBlack,
  },
  fontSize: '16px',
});

class App extends Component {
  componentWillMount() {
    document.getElementById('body').style.height = window.innerHeight + 'px';
  }

  render() {
    console.log('Process env : ', process.env);
    return (
      <div id='AppDiv' className="App">
        <MuiThemeProvider muiTheme={muiTheme}>
          <Main />
        </MuiThemeProvider>
      </div>
    );
  }

  uploadStatus = (content, uploadID) => {
    window.DocsUpload.uploadContent(content, uploadID);
  }
}

export default App;
