import { LitElement, html, css } from "lit";
// import styles2 from "./css/home.css";w
import twitchIcon from "./images/twitch-icon-5.png";
import instagramIcon from "./images/instagram.png";
import searchIcon from "./images/search-icon.png";
import youtubeIcon from "./images/white-youtube.png";
export class searchEngine extends LitElement {
  static properties = {
    name: {},
  };
  static styles = css`
    //css
    :host {
      color: blue;
    }
  `;
  constructor() {
    super();
    // this.attachShadow({mode: open});
    // this.shadowRoot.adoptedStyleSheets=[styles2];
    this.name = "Pablo";
  }
  render() {
    return html`
      <div class="container_search_engine">
        <div class="input_search">
          <input
            id="input_search"
            title="search"
            placeholder="cosita hermoza,cosita bien hecha!!"
            type="search"
            name=""
            id=""
          />
        </div>
        <div class="object1"></div>
        <div class="icon_search">
          <img src="${searchIcon}" alt="icon-search" />
        </div>
        <br />
        <div class="social_networks">
          <div id="twitch_icon" class="icons_social_networks">
            <img src="${twitchIcon}" alt="twitch-icon-5" />
          </div>
          <div id="youtube_icon" class="icons_social_networks">
            <img src="${youtubeIcon}" alt="white-youtube" />
          </div>
          <div id="instagram_icon" class="icons_social_networks">
            <img src="${instagramIcon}" alt="instagram" />
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("search-engine", searchEngine);
