import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from "./Modal.module.css"
import PropTypes from "prop-types"

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  clickEscapeHandler = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  clickBackdropHandler = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.clickEscapeHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickEscapeHandler);
  }
  render() {
    const { largeImg } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={this.clickBackdropHandler}>
        <div className={css.Modal}>
          <img src={largeImg} alt={largeImg} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}
