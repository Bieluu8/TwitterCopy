import React from "react";
import "./Css/Widgets-explore.css";
import avatar from "./images/avatar.png";

function Widgets() {
  return (
    <div className="widgets">
      <div class="layout-right-sidebar-container">
        <div class="layout-right-sidebar">
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
