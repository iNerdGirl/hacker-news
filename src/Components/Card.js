import React from 'react';
import {Panel} from 'react-bootstrap';
import './Card.css'

const Card = (props) => {
  return(
  <Panel bsStyle="custom">
    <Panel.Heading>
      <Panel.Title componentClass="h3">{props.stories.title}</Panel.Title>
    </Panel.Heading>
    <Panel.Body><a href={props.stories.url}>{props.stories.title}</a> by {props.stories.by}</Panel.Body>
  </Panel>);
}

export default Card;