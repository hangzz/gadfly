// import React from 'react'
// import ReactDOM from 'react-dom';

// import Router from './router'

// var element = document.createElement('div');
// element.id = 'root';
// document.body.appendChild(element)
// ReactDOM.render(<Router />,document.getElementById('root'))


import React  from 'react';
import { DatePicker } from 'antd';

function determineDate() {
  import('moment')
    .then(moment => moment().format('LLLL'))
    .then(str2 => str2)
    .catch(err => err);
}

sdfsdfsd
determineDdsfsdfdsfate();

// exports default class MyComponent extends React.Component {
//     render() {
//         let dateToFormat = '1976-04-19T12:59-0500';
//         <Moment>{dateToFormat}</Moment>
//     }
// }

// import Promise from 'promise-polyfill'; 

// // To add to window
// if (!window.Promise) {
//   window.Promise = Promise;
// }
