import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const title = (
      <div className="topBanner">What We Do</div>
);

function Panel(props) {
  return <li>
          <div className="bullet-top">{props.header}</div>
          <div className="bullet-body">{props.body}</div>
        </li>;
}

class AboutSection extends React.Component {
  render(){
    return(
      <div>
        {title}
        <ul className="bullets">          
          <Panel header="Bullet One" body="info"/>          
          <Panel header="Bullet Two" body="info"/>
          <Panel header="Bullet Three" body="words words words words words words words words words words words words words words words words words"/>
        </ul>
      </div>
    );
  }  
}