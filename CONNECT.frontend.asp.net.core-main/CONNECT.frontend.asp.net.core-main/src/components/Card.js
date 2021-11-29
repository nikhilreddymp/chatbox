import React from "react";
import "./card.css"
class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = {
      backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary" onClick={() => {this.props.joinRoom(this.props.user,this.props.room) }}>
        <i className="fa fa-chevron-right"></i> Join Us
      </button>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h2>{this.props.title}</h2>
        <p className="body-content">{this.props.text}</p>
        <Button joinRoom={this.props.joinRoom} room={this.props.room} user={this.props.user} />
      </div>
    )
  }
}

const Card = ({ title, image, text, joinRoom, room, user }) => <div className='card-div'>
  <article className="card">
    <CardHeader image={image} />
    <CardBody title={title} text={text} joinRoom={joinRoom} room={room} user={user} />
</article>
</div>

export default Card;
