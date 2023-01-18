import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./PLUS.svg";
import vedio from "./google.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBriefcase,
  faCalendarAlt,
  faEnvelope,
  faHouseLaptop,
  faNewspaper,
  faPercent,
  faRoad,
  faRoute,
  faShop,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Clock from "./Clock";
function Home() {
  let navigate = useNavigate();
  return (
    <div className="bg-dark homescreen">
      <div className="text-center">
        <div className="row">
          <div className="col mt-3 m-2">
            <Clock />
          </div>
          <div className="col mt-3 text-center">
            <br />
            <img src={logo} />
          </div>
          <div className="col">
            <br />
            <a
              href="https://zeinfopoint.hoope.me"
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faBriefcase} color="white" size="3x" />
              <p>Zeitbuchen</p>
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center text-white">
        <br />
        <div className="row">
          <div className="col" onClick={() => navigate("/news")}>
            <Card className="bg-secondary text-white pt-3">
              <FontAwesomeIcon icon={faNewspaper} color="white" size="3x" />
              <p>Nachrichten</p>
            </Card>
          </div>
          <div
            className="col"
            onClick={() => {
              navigate("/map");
            }}
          >
            <Card className="bg-secondary text-white pt-3">
              <FontAwesomeIcon icon={faRoute} color="white" size="3x" />
              <p>Karte</p>
            </Card>
          </div>
          <div className="col" onClick={() => navigate("/events")}>
            <Card className="bg-secondary text-white pt-3">
              <FontAwesomeIcon icon={faCalendarAlt} color="white" size="3x" />
              <p>Events</p>
            </Card>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col" onClick={() => navigate("/res")}>
            <Card className="bg-secondary text-white pt-3">
              <FontAwesomeIcon icon={faUtensils} color="white" size="3x" />
              <p>Gastronomie</p>
            </Card>
          </div>
          <div className="col" onClick={() => navigate("/bib")}>
            <Card className="bg-secondary text-white pt-3">
              <FontAwesomeIcon icon={faBook} color="white" size="3x" />
              <p>Bibliothek</p>
            </Card>
          </div>
          <div className="col" onClick={() => navigate("/shop")}>
            <Card className="bg-secondary text-white pt-3">
              <FontAwesomeIcon icon={faShop} color="white" size="3x" />
              <p>Shops</p>
            </Card>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col" onClick={() => navigate("/deals")}>
            <Card className="bg-secondary text-white pt-3">
              <FontAwesomeIcon icon={faPercent} color="white" size="3x" />
              <p>Angebote</p>
            </Card>
          </div>
          <div
            className="col"
            onClick={() => {
              navigate("/exam");
            }}
          >
            <Card className="bg-secondary text-white pt-3">
              <FontAwesomeIcon icon={faEnvelope} color="white" size="3x" />
              <p>Prüfungen</p>
            </Card>
          </div>
          <div
            className="col"
            onClick={() => {
              navigate("/jobs");
            }}
          >
            <Card className="bg-secondary text-white pt-3">
              <FontAwesomeIcon icon={faHouseLaptop} color="white" size="3x" />
              <p>Jobs</p>
            </Card>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <div className="homebg">
              {/*  <div className="vediohome" /> */}
              {/*  <iframe src="https://iframe.mediadelivery.net/embed/72603/78f0efbc-b110-4dc1-9352-16d7839a0927?autoplay=true&loop=true&muted=true" /> */}
              <video autoPlay loop muted>
                <source src={vedio} type="video/mp4" />
              </video>
            </div>
            {/*  <div className="vediohome">
              <div className="homebg"> </div>
              <Iframe
                url="https://iframe.mediadelivery.net/embed/72603/dabf71b9-1b13-42ae-a2c7-f0b8e1851055?autoplay=true&loop=true&muted=true"
                className="vediogoogle"
                display="block"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
