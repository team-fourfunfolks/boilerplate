//SCSS file
import '../scss/main.scss';

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Entry extends Component {
	render() {
		return (
			<div className="myDiv">
			  Hello Electron!
			</div>
		);
	}
}


ReactDOM.render(
	<Entry />,
	document.getElementById('content')
);
