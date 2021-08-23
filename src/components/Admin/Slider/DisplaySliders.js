import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import PageHeader from "../../PageHeader/PageHeader";
import { useHistory, Link } from "react-router-dom";
import { Fade } from "react-reveal";

export default function DisplaySliders() {
  const [slider, setSliders] = useState([]);

  const history = useHistory();
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Slider").onSnapshot(function (data) {
        setSliders(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchdata();
  }, []);

  const deleteSlider = async (id) => {
    await db.collection("Slider").doc(id).delete();
    history.push("/admin/sliders");
  };

  return (
    <div>
      <PageHeader title="Manage Documents" />
      <div className="adminListContainer">
        <div className="section adminListSection">
          <Fade up>
            <h2 className="sectionTitle">
              Manage <span>Sliders</span>
            </h2>
          </Fade>
          <Fade up>
            <Link to="/admin/create-slider" className="createBtn">
              <i className="fas fa-plus"></i>&nbsp;&nbsp;Create new Slider
            </Link>
          </Fade>
          <div className="adminList">
            {slider.map((item, index) => {
              return (
                <Fade up>
                  <div className="singleItem" key={index}>
                    <h3 className="title">
                      {item.title}
                      <br />
                      <span className="date">{item.subTitle}</span>
                    </h3>
                    <button
                      type="button"
                      className="actionBtn"
                      onClick={() => deleteSlider(item.id)}
                    >
                      <i className="far fa-trash-alt"></i>&nbsp;&nbsp;Delete
                    </button>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
