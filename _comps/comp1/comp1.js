import React, { Component } from 'react';

import moment from 'moment';

import add from 'lodash/add';

import addInternal from './comp1_internal';

class Add extends Component {
  render() {
    const {a, b} = this.props;
    return (
      <div>
      Add comp says {a} + {b} === {add(a, b)}
      <p>moment says: {moment().format()}</p>
      <p>Add internal says: {a} + {b} = {addInternal(a, b)}</p>
      </div>
    )
  }
}

const Subtract = ({a, b}) => <div>Subtract comp says {a} - {b} = {a-b}</div>

export default add;

export {Add, Subtract};
