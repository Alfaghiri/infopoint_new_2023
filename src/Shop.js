import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Card";
import Raw from "react-bootstrap/Card";
import Popup from "reactjs-popup";
import Clock from "./Clock";
import RingLoader from "react-spinners/RingLoader";
import ReactStars from "react-rating-stars-component";
import QRCode from "react-qr-code";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faClock,
  faDirections,
  faEnvelope,
  faFire,
  faHome,
  faL,
  faLocationDot,
  faLocationPin,
  faMailBulk,
  faMapLocationDot,
  faPercent,
  faPhone,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
function Shop() {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const [shop, setShop] = useState([]);
  const ref = useRef(null);
  const ref1 = useRef(null);
  const closePopup = () => ref.current.close();
  const closePopup1 = () => ref1.current.close();
  const kcaltable = [
    "Bohnen",
    "Erbsen",
    "Kartoffel",
    "Putenbrust",
    "Rinderfilet",
  ];
  const kcalvalue = ["0.25", "0.82", "0.86", "1.11", "1.15"];

  const url =
    "https://raw.githubusercontent.com/Alfaghiri/infopoint/master/shops_local.json";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setShop(data);
        console.log(data);
      });
  }, []);

  function getkcal(dist) {
    return Math.round(dist * 50);
  }
  function getrate(rate) {
    let rater = Math.round(rate);
    if (rater < rate) {
      return rater + 0.5;
    } else {
      return rater;
    }
  }
  function getTime(dist) {
    let x = dist / 0.075;
    return Math.round(x);
  }
  function getcal(kcal) {
    let restkcal = kcal;
    if (kcal < 100) {
      return (
        <div>
          <tr>
            <td>{kcal * kcalvalue[0] + " g"} </td>
            <td></td>
            <td> {"  " + kcaltable[0]}</td>
          </tr>
        </div>
      );
    } else if (kcal > 100 && kcal < 300) {
      restkcal = kcal / 2;
      return (
        <div>
          <tr>
            <td>{restkcal * kcalvalue[0] + " g"} </td>
            <td></td>
            <td> {"  " + kcaltable[0]}</td>
          </tr>
          <tr>
            <td>{restkcal * kcalvalue[1] + " g"} </td>
            <td></td>
            <td> {"  " + kcaltable[1]}</td>
          </tr>
        </div>
      );
    }
  }
  return (
    <>
      <div className="text-white shopp bg-dark">
        <div className="text-center">
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
                icon={faShop}
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
      <div className="container shoplogo maincontent">
        <div className="row">
          {shop.map((item, index) => {
            if (item.sale != null) {
              return (
                <div className="col">
                  <Popup
                    ref={ref}
                    trigger={
                      <div className="shoplogo">
                        <br />
                        <img src={process.env.PUBLIC_URL + item.logo} />
                        <br />
                      </div>
                    }
                    position="top center"
                    className="shopcard"
                    arrow={false}
                    modal
                    closeOnDocumentClick={false}
                  >
                    <div className="popupshop text-white text-center bib">
                      <div className="row">
                        <br />
                        <video autoPlay loop muted>
                          <source
                            src={process.env.PUBLIC_URL + item.vedio}
                            type="video/mp4"
                          />
                        </video>
                        <br />

                        <div className="row mt-3 lh-1 gap-2 bib">
                          <div className="col">
                            <tr>
                              <td valign="middle">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  color="white"
                                  size="1x"
                                />
                              </td>
                              <td valign="middle">
                                {item.open.map((itemm) => {
                                  return <h3>{itemm}</h3>;
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td valign="middle">
                                <FontAwesomeIcon
                                  icon={faLocationDot}
                                  color="white"
                                  size="1x"
                                />
                              </td>
                              <td valign="middle">
                                <h3>{item.adress}</h3>
                              </td>
                            </tr>
                          </div>

                          <div className="col">
                            <tr>
                              <td valign="middle">
                                <FontAwesomeIcon
                                  icon={faMapLocationDot}
                                  color="white"
                                  size="2x"
                                />
                              </td>
                              <td valign="middle">
                                <h2>{item.distance} km</h2>
                              </td>
                            </tr>
                            <tr>
                              <td valign="middle" align="center">
                                <FontAwesomeIcon
                                  icon={faFire}
                                  color="white"
                                  size="2x"
                                />
                              </td>
                              <td valign="middle" align="left">
                                <h2>{getkcal(item.distance)} Kcal</h2>
                              </td>
                              <td valign="middle" align="left">
                                <Popup
                                  ref={ref1}
                                  trigger={
                                    <div className="infoi">
                                      <button>i</button>
                                    </div>
                                  }
                                  position="top center"
                                  className="shoppcard"
                                  arrow={false}
                                  modal
                                >
                                  <h2>
                                    {getkcal(item.distance)} kcal Entspricht:
                                  </h2>
                                  {getcal(getkcal(item.distance))}
                                </Popup>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <FontAwesomeIcon icon={faClock} color="white" />
                              </td>
                              <h2>{getTime(item.distance) + " Min"}</h2>
                            </tr>
                          </div>
                          <div className="col text-center">
                            <tr>
                              <h2>
                                Bewertung <br /> {item.rate}
                              </h2>
                            </tr>

                            <tr>
                              <td>
                                <ReactStars
                                  value={getrate(item.rate)}
                                  isHalf={true}
                                  edit={false}
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Popup
                                  trigger={
                                    <FontAwesomeIcon
                                      icon={faPercent}
                                      color="white"
                                      size="2x"
                                    />
                                  }
                                  position="top center"
                                  className="shoppcard"
                                  arrow={false}
                                  modal
                                >
                                  <div className="text-center">
                                    <QRCode value={item.sale} />
                                  </div>
                                </Popup>
                              </td>
                            </tr>
                          </div>
                        </div>
                      </div>
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
            } else {
              return (
                <div className="col">
                  <Popup
                    ref={ref}
                    trigger={
                      <div className="shoplogo">
                        <br />
                        <img src={process.env.PUBLIC_URL + item.logo} />
                        <br />
                      </div>
                    }
                    position="top center"
                    className="shopcard"
                    arrow={false}
                    modal
                    closeOnDocumentClick={false}
                  >
                    <div className="popupnews text-white text-center bib">
                      <div className="row">
                        <br />
                        <video autoPlay loop muted>
                          <source
                            src={process.env.PUBLIC_URL + item.vedio}
                            type="video/mp4"
                          />
                        </video>
                        <br />

                        <div className="row mt-3 lh-1 gap-2 bib">
                          <div className="col">
                            <tr>
                              <td valign="middle">
                                <FontAwesomeIcon
                                  icon={faClock}
                                  color="white"
                                  size="1x"
                                />
                              </td>
                              <td valign="middle">
                                {item.open.map((itemm) => {
                                  return <h3>{itemm}</h3>;
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td valign="middle">
                                <FontAwesomeIcon
                                  icon={faLocationDot}
                                  color="white"
                                  size="1x"
                                />
                              </td>
                              <td valign="middle">
                                <h3>{item.adress}</h3>
                              </td>
                            </tr>
                          </div>

                          <div className="col">
                            <tr>
                              <td valign="middle">
                                <FontAwesomeIcon
                                  icon={faMapLocationDot}
                                  color="white"
                                  size="2x"
                                />
                              </td>
                              <td valign="middle">
                                <h2>{item.distance} km</h2>
                              </td>
                            </tr>
                            <tr>
                              <td valign="middle" align="center">
                                <FontAwesomeIcon
                                  icon={faFire}
                                  color="white"
                                  size="2x"
                                />
                              </td>
                              <td valign="middle" align="left">
                                <h2>{getkcal(item.distance)} Kcal</h2>
                              </td>
                              <td valign="middle" align="left">
                                <Popup
                                  ref={ref1}
                                  trigger={
                                    <div className="infoi">
                                      <button>i</button>
                                    </div>
                                  }
                                  position="top center"
                                  className="shoppcard"
                                  arrow={false}
                                  modal
                                >
                                  <h2>
                                    {getkcal(item.distance)} kcal Entspricht:
                                  </h2>
                                  {getcal(getkcal(item.distance))}
                                </Popup>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <FontAwesomeIcon icon={faClock} color="white" />
                              </td>
                              <h2>{getTime(item.distance) + " Min"}</h2>
                            </tr>
                          </div>
                          <div className="col text-center">
                            <tr>
                              <h2>
                                Bewertung <br /> {item.rate}
                              </h2>
                            </tr>

                            <tr>
                              <td>
                                <ReactStars
                                  value={getrate(item.rate)}
                                  isHalf={true}
                                  edit={false}
                                />
                              </td>
                            </tr>
                          </div>
                        </div>
                      </div>
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
            }
          })}
        </div>
      </div>
    </>
  );
}
export default Shop;
