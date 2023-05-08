import React from "react";
import "./Css/Widgets-main.css";
import avatar from "./images/avatar.png";
import search from "./svg/search.svg";

function Widgets() {
  return (
    <div className="widgets">
      <div class="layout-right-sidebar-container">
        <div class="layout-searchbar">
          <img class="layout-searchbar-image" src={search} alt="search"/>
          <input type="text" placeholder="Wyszukiwarka Twattera"/>
        </div>
        <div class="layout-right-sidebar">
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
                155k Tweets
              </div>
            </div>
            <div class="trends-for-you-block">
              <div class="trends-for-you-meta-information">
                Trending in Poland
              </div>
              <div class="trends-for-you-trend-name">
                #Darmowe
              </div>
            </div>
            <div class="trends-for-you-block">
              <div class="trends-for-you-meta-information">
                Motoryzacja - Trending
              </div>
              <div class="trends-for-you-trend-name">
                #Samochody brr
              </div>
              <div class="trends-for-you-meta-information">
                2,800 Tweets
              </div>
            </div>

            <div class="trends-for-you-block">
            <div class="trends-for-you-show-more">
              Show more
            </div>
            </div>

          </div>
          <div class="who-to-follow">
              <div class="who-to-follow-heading">
                Who to follow
              </div>
            <div class="who-to-follow-block">
              <img
                class="who-to-follow-author-logo"
                src={avatar} alt="avatar"
              />
              <div class="who-to-follow-content">
                <div>
                  <div class="who-to-follow-author-name">
                    Barack Obama
                  </div>
                  <div class="who-to-follow-author-slug">
                    @obamium
                  </div>
                </div>
                <div class="who-to-follow-button">
                  Follow
                </div>
              </div>
            </div>
            <div class="who-to-follow-block">
              <img class="who-to-follow-author-logo" src={avatar} alt="avatar" />
              <div class="who-to-follow-content">
                <div>
                  <div class="who-to-follow-author-name">
                    Andrew Tate
                  </div>
                  <div class="who-to-follow-author-slug">
                    @cobratate
                  </div>
                </div>
                <div class="who-to-follow-button">
                  Follow
                </div>
              </div>
            </div>

            <div class="who-to-follow-block">
              <img class="who-to-follow-author-logo" src={avatar} alt="avatar" />
              <div class="who-to-follow-content">
                <div>
                  <div class="who-to-follow-author-name">
                    Aleks&Dawid
                  </div>
                  <div class="who-to-follow-author-slug">
                    @DawidAlexPastedCode
                  </div>
                </div>
                <div class="who-to-follow-button">
                  Follow
                </div>
              </div>
            </div>
            <div class="who-to-follow-block">
              <div class="who-to-follow-show-more">
                Show more
              </div>
            </div>
          </div>
        </div>
        <div class="privacy-policy">
        <div class="privacy-policy-text">Zasady użytkowania</div>
        <div class="privacy-policy-text">Polityka prywatności</div>
        <div class="privacy-policy-text">Polityka dotycząca plików cookie</div>
        <div class="privacy-policy-text">Dostępność</div>
        <div class="privacy-policy-text">Informacje o reklamach</div>
        <div class="privacy-policy-text">Więcej ...</div>
        <div class="privacy-policy-text">@ 2022 Twatter, Inc.</div>
        </div>
      </div>
      
    </div>
  );
}

export default Widgets;
