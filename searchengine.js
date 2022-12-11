import {LitElement,html,css} from 'lit'
import styles2 from './css/home.css'


export class searchEngine extends LitElement{
    static properties={
        name:{},
    }
    static styles= //css
    css`
    :host{
        color:blue;
        
    }
 

    `
    constructor(){
        super();
        // this.attachShadow({mode: open});
        // this.shadowRoot.adoptedStyleSheets=[styles2];
        this.name='Pablo';
    }
    render(){
        return html`
      <div class="container_search_engine">
        <div class="input_search">
            <input id="input_search" title="search" 
            
            placeholder="cosita hermoza,cosita bien hecha!!" 
            type="search" name="" id="">
        </div>
        <div class="object1"></div>
        <div class="icon_search">
            <img src="./images/search-icon.png" 
            alt="icon-search">
        </div>
        <br>
        <div class="social_networks">
            <div 
            id="twitch_icon"
            class="icons_social_networks">
                <img src="./images/twitch-icon-5.png"
                 alt="twitch-icon-5">
            </div>
            <div
            id="youtube_icon" 
            class="icons_social_networks">
                <img src="./images/white-youtube.png"
                 alt="white-youtube">
            </div>
            <div 
            id="instagram_icon"
            class="icons_social_networks">
                <img src="./images/instagram.png"
                 alt="instagram">
            </div>
        </div>

    </div>    

        `
    }
    
}
customElements.define("search-engine",searchEngine)