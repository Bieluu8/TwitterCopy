import React from "react";
import event from "./images/event.jpg";
import search from "./svg/search.svg";
import dots from "./svg/threedots.svg";
import "./Css/Explore.css";

function Explore() {
  return (
    <div className="feed">
        <div className="feed-header">
        <div class="layout-searchbar">
          <img class="layout-searchbar-image" src={search} alt="search"/>
          <input type="text" placeholder="Wyszukiwarka Twattera"/>
        </div>
        </div>
        <div className="feed-event">
          <p class="feed-event-text-info"> Social • Na żywo </p>
          <p class="feed-event-text"> Świętowanie kolejnych urodzin Ś.P Stana Lee </p>
            <img class="feed-event-bg" src={event} alt="Event" />
        </div>
    
    <div class="trends-for-you">
            <div class="trends-for-you-heading">
                Trends for you
            </div>
            <div class="trends-for-you-block">
              <div class="trends-for-you-meta-information">
                Trending in Germany
              </div>
              <div class="trends-for-you-trend-name">
                #Arbeit macht frei
              </div>
              <div class="trends-for-you-meta-information">
                155 tyś Twattów
              </div>
              <img class="trends-for-you-dots" src={dots} alt="info dots" />
            </div>
            <div class="trends-for-you-block">
              <div class="trends-for-you-meta-information">
                Trending in Poland
              </div>
              <div class="trends-for-you-trend-name">
                #Darmowe
              </div>
              <div class="trends-for-you-meta-information">
                700 tyś Twattów
              </div>
              <img class="trends-for-you-dots" src={dots} alt="info dots" />
            </div>
            <div class="trends-for-you-block">
              <div class="trends-for-you-meta-information">
                Motoryzacja - Trending
              </div>
              <div class="trends-for-you-trend-name">
                #Samochody brr
              </div>
              <div class="trends-for-you-meta-information">
                2,800 tyś Twattów
              </div>
              <img class="trends-for-you-dots" src={dots} alt="info dots" />
            </div>

            <div class="trends-for-you-block">
            <div class="trends-for-you-show-more">
              Show more
            </div>
            </div>

          </div>
        </div>
  );
}

export default Explore;
