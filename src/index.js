import React from 'react'
import ReactDOM from 'react-dom';

import Router from './router'

var element = document.createElement('div');
element.id = 'root';

document.body.appendChild(element)
ReactDOM.render(<Router />,document.getElementById('root'))
