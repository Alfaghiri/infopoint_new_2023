import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import XMLParser from "react-xml-parser";
import Card from "react-bootstrap/Card";
import Popup from "reactjs-popup";
import Clock from "./Clock";
import QRCode from "react-qr-code";
import RingLoader from "react-spinners/RingLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faHome,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
function Events() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const ref = useRef(null);
  const closePopup = () => ref.current.close();
  let navigate = useNavigate();
  const url = "https://infoevent.herokuapp.com";
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setEvents(data);
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
              icon={faCalendarAlt}
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
        {events.map((item, index) => {
          const words = item.des.split(" ");
          const shortenedWords = words.slice(0, 15);
          return (
            <div>
              <Popup
                ref={ref}
                trigger={
                  <div className="row mt-3 m-2 lh-1 gap-2 popupevent text-white">
                    <div className="col-5">{<img src={item.image} />}</div>
                    <div className="col lh-1">
                      <h1>{item.titel}</h1>
                      <h2>{item.date}</h2>
                      <p className="line-height-6">
                        {shortenedWords.join(" ") + "..."}
                      </p>
                      <div className="row"></div>
                    </div>
                  </div>
                }
                position="top center"
                className="eventscard"
                arrow={false}
                modal
                closeOnDocumentClick={false}
              >
                <div className="popupnews text-center bib">
                  <div className="row">
                    <h1>{item.name}</h1>
                  </div>
                  <div className="row">
                    <div className="text-center">
                      <h1>{item.titel}</h1>
                      <QRCode value={item.link} />
                    </div>
                  </div>
                  <div className="row"></div>
                  <button
                    className="close bg-indicatorbackground"
                    onClick={closePopup}
                  >
                    X
                  </button>
                </div>
              </Popup>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Events;
