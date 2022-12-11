import {html,css,LitElement} from 'lit'

export class myLoader extends LitElement{
    static styles=//css
    css`
        :root{
  --loader--dimension:170px;
  --half-fullSize:50%;
 
    --one-hundred-percent:100%;
    --transition-hamburguer:3s;
}
.container_loader{
    width:var(--one-hundred-percent);
    height:var(--one-hundred-percent);
    position:absolute;
  display: flex;
  place-content: center;
}

#loader {
    position: absolute;
    left: var(--half-fullSize);
    top: var(--half-fullSize);
    z-index: 1;
    width: var(--loader--dimension);
    height: var(--loader--dimension);
    margin: -76px 0 0 -76px;
    background-image: url('./images/cute-anime-emoji.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border: 16px solid #f3f3f3;
    border-radius: var(--half-fullSize);
    border-top: 16px solid #912aec;
    -webkit-animation: spin 2s linear infinite;
    animation:  2s infinite alternate spinAnimation;
  }
  
  @-webkit-keyframes spinAnimation {
    0% {
      transform: translate(0);
      opacity: 0.1;
      --webkit-transformation:
    }
    100% { 
      transform: translateY(-50px);
    }
  } 
  
  
  
  /* Add animation to "page content" */
  .animate-bottom {
    position: relative;
    -webkit-animation-name: animatebottom;
    -webkit-animation-duration: 1s;
    animation-name: animatebottom;
    animation-duration: 1s
  }
  
  @-webkit-keyframes animatebottom {
    from { bottom:-100px; opacity:0 } 
    to { bottom:0px; opacity:1 }
  }
  
  @keyframes animatebottom { 
    from{ bottom:-100px; opacity:0 } 
    to{ bottom:0; opacity:1 }
  }
  

    `;
    constructor(){
        super();
        this.myVar;
        this.myFunction=()=> {
            myVar = setTimeout(showPage, 2000);
          }

    }
    render(){
            return html`
            <div class="container_loader">
            <!-- LOADER#1 START -->
                <div id="loader"></div>
                <!-- LOADER#1 END -->
            </div>
            `
    }
}
customElements.define('my-loader',myLoader);