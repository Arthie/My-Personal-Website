import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


/*
Ordering for class extends React.Component:
optional static methods
constructor
getChildContext
componentWillMount
componentDidMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
componentDidUpdate
componentWillUnmount
clickHandlers or eventHandlers like onClickSubmit() or onChangeDescription()
getter methods for render like getSelectReason() or getFooterContent()
optional render methods like renderNavigation() or renderProfilePicture()
render
*/