import React, { useRef, useState } from "react";
import "../common.css";
import { useAuth } from "../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import PageHeader from "../../PageHeader/PageHeader";
import AlertModal from "../../AlertModal/AlertModal";
import { Fade } from "react-reveal";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/admin/dashboard");
    } catch {
      setError("Failed to Login");
      showModal(
        <AlertModal
          message="Failed to Login! Please try again."
          icon="failed.png"
          close={closeModal}
        />
      );
    }
  }

  return (
    <React.Fragment>
      <PageHeader title="Login" />
      {modal}
      <div className="loginContainer">
        <div className="section loginSection">
          <h2 className="sectionTitle">
            <span>Admin</span> Login
          </h2>
          <form action="#">
            <Fade up>
              <div className="inputGroup">
                <input
                  type="text"
                  name="username"
                  id="email"
                  placeholder="Email*"
                  ref={emailRef}
                  autoFocus
                  required
                />
                <label htmlFor="email">Email*</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password*"
                  ref={passwordRef}
                  required
                />
                <label htmlFor="password">Password*</label>
              </div>
            </Fade>
            <Fade up>
              <div className="inputGroup">
                <button onClick={handleSubmit} type="submit">
                  Login&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </Fade>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
