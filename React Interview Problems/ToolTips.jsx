import React, { Component } from 'react';
import './styles.css';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverIndex: null
    }
  }
  handleMouseEnter = (index) => {
    this.setState({ hoverIndex: index })
  }

  handleMouseLeave = () => {
    this.setState({ hoverIndex: null })
  }

  render() {
    const icons = [
      { emoji: '🏠', label: 'Home' },
      { emoji: '📧', label: 'Email' },
      { emoji: '⚙️', label: 'Settings' }
    ];

    return (
      <div className="tooltip-container">
        {icons.map((icon, index) => (
          <div key={index} className="tooltip-item"
            onMouseEnter={() => this.handleMouseEnter(index)}
            onMouseLeave={this.handleMouseLeave}
          >
            {this.state.hoverIndex === index && (<div className="tooltip-box">{icon.label}</div>)}
            <span>{icon.emoji}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Tooltip;
