import React from 'react';
import ReactDOM from 'react-dom';
import SelectBox from './select-box';
import airportList from './data.json';

const App = () => {
  return (
    <div>
      <div style={{margin: '16px', position: 'relative'}}>
        <h1>Airport Chooser</h1>
        <SelectBox items = {airportList} />
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
