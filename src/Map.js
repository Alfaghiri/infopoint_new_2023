import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import Clock from "./Clock";
import FullCalendar, { startOfDay } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { faHome, faRoute } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
function Map() {
  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const closePopup = () => ref.current.close();
  let navigate = useNavigate();
  const [mapPath, setMapPath] = useState([]);
  const url =
    "https://raw.githubusercontent.com/Alfaghiri/infopoint/master/map_eg.json";
  const url_t01 = "https://infocal.herokuapp.com/t01";
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url_t01);
      const data = await res.json();
      setEvent(data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setMapPath(data);
    }
    fetchData();
  }, []);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
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
              icon={faRoute}
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
      <div className="text-center">
        <div className="text-white maincontent">
          <svg
            id="Door"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-100 200 2500 3600"
          >
            <g transform="translate(30 0)">
              {mapPath.map((item) => {
                if (
                  item.id != "test" &&
                  item.id != "text" &&
                  item.cal != "false"
                ) {
                  return (
                    <Popup
                      // ref={ref}
                      trigger={
                        <path id={item.id} className={item.class} d={item.d} />
                      }
                      position="top center"
                      className="newscard"
                      arrow={false}
                      modal
                      closeOnDocumentClick={false}
                      on="click"
                      open={isOpen}
                      onOpen={handleOpen}
                    >
                      <FullCalendar
                        plugins={[
                          dayGridPlugin,
                          interactionPlugin,
                          timeGridPlugin,
                          //bootstrap5Plugin,
                        ]}
                        eventClick={function (arg) {
                          Swal.fire({
                            title: arg.event.title,
                            text: arg.event.id,
                            type: "success",
                            showConfirmButton: false,
                          });
                        }}
                        slotMinTime="07:30"
                        slotMaxTime="19:30"
                        allDaySlot={false}
                        locale="de"
                        weekNumbers={true}
                        initialView="timeGrid"
                        weekends={false}
                        headerToolbar={{
                          center: "title",
                          start: "prev,next",
                          end: "",
                        }}
                        buttonText
                        themeSystem="bootstrap5"
                        dayCount={2}
                        events={event}
                      />
                      <button
                        className="close bg-indicatorbackground"
                        onClick={handleClose}
                      >
                        X
                      </button>
                    </Popup>
                  );
                } else if (
                  item.cal == "false" &&
                  item.id != "test" &&
                  item.id != "text"
                ) {
                  return (
                    <Popup
                      ref={ref}
                      trigger={
                        <path id={item.id} className={item.class} d={item.d} />
                      }
                      position="top center"
                      className="eventscard"
                      arrow={false}
                      modal
                      closeOnDocumentClick={true}
                    >
                      <h1 className="text-white text-center">{item.id}</h1>
                      <button
                        className="close bg-indicatorbackground"
                        onClick={closePopup}
                      >
                        X
                      </button>
                    </Popup>
                  );
                } else {
                  return (
                    <path id={item.id} className={item.class} d={item.d} />
                  );
                }
              })}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
export default Map;
