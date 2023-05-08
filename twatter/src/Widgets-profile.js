import React from "react";
import "./Css/Widgets-profile.css";
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
          <div class="may-like-it">
              <div class="may-like-it-heading">
                Może Ci się spodobać
              </div>
            <div class="may-like-it-block">
              <img
                class="may-like-it-author-logo" src={avatar} alt="avatar" />
              <div class="may-like-it-content">
                <div>
                  <div class="may-like-it-author-name">
                    Barack Obama
                  </div>
                  <div class="may-like-it-author-slug">
                    @obamium
                  </div>
                </div>
                <div class="may-like-it-button">
                  Follow
                </div>
              </div>
            </div>

            <div class="may-like-it-block">
              <img class="may-like-it-author-logo" src={avatar} alt="avatar" />
              <div class="may-like-it-content">
                <div>
                  <div class="may-like-it-author-name">
                    Andrew Tate
                  </div>
                  <div class="may-like-it-author-slug">
                    @cobratate
                  </div>
                </div>
                <div class="may-like-it-button">
                  Follow
                </div>
              </div>
            </div>

            <div class="may-like-it-block">
              <img class="may-like-it-author-logo" src={avatar} alt="avatar" />
              <div class="may-like-it-content">
                <div>
                  <div class="may-like-it-author-name">
                    Aleks&Dawid
                  </div>
                  <div class="may-like-it-author-slug">
                    @DawidAlexPastedCode
                  </div>
                </div>
                <div class="may-like-it-button">
                  Follow
                </div>
              </div>
            </div>
            <div class="who-to-follow-block">
              <div class="who-to-follow-show-more">
                Pokaż więcej
              </div>
            </div>
            </div>

            <div class="trends-for-you">
            <div class="trends-for-you-heading">
                Najpopularniejsze dla Ciebie
            </div>
            <div class="trends-for-you-block">
              <div class="trends-for-you-meta-information">
                Trending in Germany
              </div>
              <div class="trends-for-you-trend-name">
                #Arbeit macht frei
              </div>
              <div class="trends-for-you-meta-information">
                155k Twaats
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
                2,800 Twaats
              </div>
            </div>

            <div class="trends-for-you-block">
            <div class="trends-for-you-show-more">
              Pokaż więcej
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
