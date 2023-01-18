import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faClock,
  faEnvelope,
  faHome,
  faLocationPin,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Clock from "./Clock";
import Col from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { FaMailchimp, FaOpenid } from "react-icons/fa";

function Bib() {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const [bib, setBib] = useState([]);
  const url =
    "https://raw.githubusercontent.com/Alfaghiri/infopoint/master/bib.json";

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setBib(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="text-center shopp bg-dark">
        <div className="row">
          <div className="col mt-3 m-2">
            <Clock />
          </div>
          <div
            className="col mt-3 text-center"
            onClick={() => {
              navigate("/");
            }}
          >
            <br />
            <img />
            <FontAwesomeIcon
              icon={faBook}
              color="white"
              style={{ height: "10vw" }}
            />
          </div>
          <div
            className="col"
            onClick={() => {
              navigate("/");
            }}
          >
            <br />
            <FontAwesomeIcon
              icon={faHome}
              color="white"
              style={{ height: "10vw" }}
            />
          </div>
        </div>
      </div>

      <div className="text-white text-center loadingcentered">
        {loading ? (
          <div>
            <RingLoader color="#FFFFFF" />
            <br />
            loading...
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="maincontent">
        {bib.map((item) => {
          return (
            <div className="row mt-3 m-2 lh-1 gap-2 bib">
              <div className="col-5">
                <img src={item.image} width="180" />
              </div>
              <div className="col lh-1">
                <h1>{item.name}</h1>
                <div className="row">
                  <div className="col-1">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      color="white"
                      size="xs"
                    />
                  </div>
                  <div className="col-10 bib">
                    <p>{item.adresse}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-1">
                    <FontAwesomeIcon icon={faClock} color="white" size="xs" />{" "}
                  </div>
                  <div className="col-10 bib">
                    <p>
                      {item.normalopen1} <br /> {item.normalopen2} <br />{" "}
                      {item.normalopen3}
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-1">
                    <FontAwesomeIcon icon={faPhone} color="white" size="xs" />{" "}
                  </div>
                  <div className="col-10 bib">
                    <p>{item.tel}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-1">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      color="white"
                      size="xs"
                    />{" "}
                  </div>
                  <div className="col-10 bib">
                    <p>{item.email}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Bib;
