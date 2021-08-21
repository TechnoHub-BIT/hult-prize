import React, { useRef, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import PageHeader from "../../PageHeader/PageHeader";
import { Fade } from "react-reveal";
import AlertModal from "../../AlertModal/AlertModal";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [modal, showModal] = useState("");

  const closeModal = () => {
    showModal("");
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
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
    setLoading(false);
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BITD 2022- Let's have a Talk</title>
        <meta name="title" content="Hult Prize BITD 2022- Let's have a Talk" />
        <meta name="description" content="" />
      </Helmet>
      <PageHeader title="Login" />
      {modal}
      <div className="loginCont">
        <form action="#">
          <Fade up>
            <div className="heading">
              Ello there Mate &#128075;,
              <br />
              Make sure you have the right Credentials!
            </div>
            <div className="inputGroup">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                ref={emailRef}
              />
            </div>
            <div className="inputGroup">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <div className="inputGroup">
              <button disabled={loading} onClick={handleSubmit} type="submit">
                Login&nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </Fade>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
