import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Clock() {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [todayDate, setTodayDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setHours(getTime(date.getHours()));
      setMinutes(getTime(date.getMinutes()));
      setSeconds(getTime(date.getSeconds()));
    }, 1);
  });

  function getDayName(day) {
    let days = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ];
    return days[day];
  }

  function getTime(time) {
    return `${time < 10 ? `0${time}` : `${time}`}`;
  }

  return (
    <div className="timecontainer">
      <Container className="text-white text-center">
        <Col className="col-11">
          <h1>
            {getDayName(todayDate.getDay())}
            <br />
            {todayDate.toLocaleDateString("de-AU", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </h1>
        </Col>

        <tr>
          <td>
            <Card
              className="bg-secondary clockcard text-white"
              style={{ width: "7vw", height: "7vw" }}
            >
              {hours}
            </Card>
          </td>
          <td>:</td>
          <td>
            {" "}
            <Card
              className="bg-secondary clockcard text-white"
              style={{ width: "7vw", height: "7vw" }}
            >
              {minutes}
            </Card>
          </td>
          <td>:</td>
          <td>
            {" "}
            <Card
              className="bg-secondary clockcard2 text-black"
              style={{ width: "7vw", height: "7vw" }}
            >
              {seconds}
            </Card>
          </td>
        </tr>
      </Container>
    </div>
  );
}
export default Clock;
