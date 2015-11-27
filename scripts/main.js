var React = require('react'),
  ReactDOM = require('react-dom');

/*
  StorePicker commponent
 */

var StorePicker = React.createClass({
  render: function() {
    return (
      <form className="store-selector">
      	<h2>Please enter a store</h2>
      	<input type="text" ref="storeId"/>
      	<input type="submit"/>
      </form>
    )
  }
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
