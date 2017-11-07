var React = require('react');
var TileLayout = require('./TileLayout');
var ListLayout = require('./ListLayout');
var WorkItem = require('./WorkItem');

var Work = React.createClass({
  handleLayoutEvent: function(event) {
    this.props.changeLayout(event.target.value);
  },
  render: function() {
    var layout;
    if (this.props.layout === "tile") {
      layout = TileLayout;
    } else {
      layout = ListLayout;
    }
    var shotData = this.props.shots.map(function(shot) {
      return (
        <WorkItem
          title={ shot.title }
          image={ shot.images.normal }
          key={ shot.id }
          description={ shot.description }
          likes={ shot.likes_count }
          layout={ layout }
        />
      );
    });
    return (
      <div className="work">
        <div className="controls">
          <select value={ this.props.layout } onChange={ this.handleLayoutEvent }>
            <option value="tile">Tile</option>
            <option value="list">List</option>
          </select>
        </div>
        { shotData }
      </div>
    )
  }
});

module.exports = Work;