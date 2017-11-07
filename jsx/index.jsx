// Problems with reading the .json files? Try `  -n 4096`.
var React = require('react');
var shots = require('./sample-api');
var site = require('./site');
var Sidebar = require('./Sidebar');
var Work = require('./Work');


var App = React.createClass({
  getInitialState: function() {
    return {
      shots: shots,
      site: site,
      layout: "tile"
    }
  },
  changeLayout: function(layout) {
    this.setState({
      layout: layout
    });
  },
  render: function() {
    return (
      <div className="app">
        <Sidebar
          name={ this.state.site.name }
          tagline={ this.state.site.tagline }
          bio={ this.state.site.bio }
        />
        <Work
          shots={ this.state.shots }
          layout={ this.state.layout }
          changeLayout={ this.changeLayout }
        />
      </div>
    )
  }
});

module.exports = App;