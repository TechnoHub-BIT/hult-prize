import React, { Component } from "react";
import "./AlertModal.css";

class AlertModal extends Component {
  state = {
    showModal: true,
    modalClass: "modalCont show",
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      modalClass: "modalCont",
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className={this.state.modalClass}>
          <div className="modalContent">
            <div className="modalBody">
              {this.props.admin ? (
                <img
                  src={"../assets/images/icons/" + this.props.icon}
                  alt="Status Icon"
                />
              ) : (
                <img
                  src={"./assets/images/icons/" + this.props.icon}
                  alt="Status Icon"
                />
              )}
              <p>{this.props.message}</p>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    this.closeModal();
                    this.props.close();
                    if (this.props.reload != null) location.reload();
                  }}
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AlertModal;
