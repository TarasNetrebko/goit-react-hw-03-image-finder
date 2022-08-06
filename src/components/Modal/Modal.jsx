import React, {Component} from "react"
export class Modal extends Component {
    componentDidMount() {

    }
    componentWillUnmount() {
        
    }

    render() {
    const { id, largeImg } = this.props;
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={largeImg} alt={id} />
        </div>
      </div>
    );
  }
}
