import React, {Component} from 'react'
import './App.css'


export default class  App extends Component {
 constructor(props){
   super(props);
  
   
  this.dropNav = this.dropNav.bind(this);
  this.homeScreenText = this.homeScreenText.bind(this)
  this.changeSlides = this.changeSlides.bind(this)
}
changeSlides(e){
  let slides = Array.from(document.querySelectorAll('#slideShowContainer > div'));
  console.log(slides)
  let circles = Array.from(document.querySelectorAll('#slideShowControls > span > span'));
  if (e.target.id === 'forwardButtonSlides'){
    for (let i = 0; i < slides.length; i++){
      console.log(slides[i].classList)
      if (slides[i].classList.contains('active')){
        slides[i].classList.remove('active')
        circles[i].classList.remove('active')
        if (i === slides.length - 1){
          slides[0].classList.add('active')
          circles[0].classList.add('active')
          
          return;
        }
        else{
          slides[i + 1].classList.add('active');
          circles[i + 1].classList.add('active');
          return;
        }
      }
    }
  }
  else{
    for (let i = 0; i < slides.length; i++){
      if (slides[i].classList.contains('active')){
        slides[i].classList.remove('active')
        circles[i].classList.remove('active')
        if (i === 0){
          slides[slides.length - 1].classList.add('active')
          circles[slides.length - 1].classList.add('active')
          return;
        }
        else{
          slides[i - 1].classList.add('active');
          circles[i - 1].classList.add('active');
          return;
        }
      }
    }
  }
  
}
dropNav(){
  let navBar = document.getElementById('topNavBar');
  if(navBar.classList.contains('active') === false){
    navBar.classList.add('active');
    console.log(navBar)
  }
  else{
    navBar.classList.remove('active')
  }
  
}
componentDidMount(){
  this.homeScreenText();
}
homeScreenText(){
  const phrases = ["My name is Kyle Hannemann", "I am a web developer", "I am a father", "I am an athlete"]
  let index = 0;
  let showText = setInterval(()=>{
    let text = document.getElementById('welcomeText');
    text.innerText = phrases[index];
    index++;
    if (index === phrases.length + 1){
      clearInterval(showText);
      text.innerText = "Learn More Below"
      let arrow = document.createElement('a');
      arrow.innerHTML = "&#x25BC;"
      arrow.id = "homepageArrow"
      arrow.href = "#skillsContainer"
      text.appendChild(arrow);
      setTimeout(()=>{text.style.animation = "none"}, 1800) 
      //setTimeout(()=>{text.innerText = "Thank you for visiting my page"}, )
    }
  }, 4490)
  
}
 
  render(){
  return (
    <div>
      <header id="topNavBar">
        <span id="topNavBarIcon" onClick={this.dropNav}>&#9776;</span>
        {/*add a active class*/}
        <a href="#homeScreenContainer" className="activePage">Home</a>
        <a href="#skillsContainer">Skills</a>
        <a href="#aboutMeContainer">About</a>
        <a href="#">Accomplishments</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </header>
      <div id="homeScreenContainer">
        
      <div id="welcomeText">Hello,</div>
      </div>
      <div id="skillsContainer">
      <h1>Web Development</h1>
      <div id="skillsFlexBox">
        <div>
          <h2>Front End</h2>
          <div>Java Script</div>
          <div>ReactJS</div>
          <div>HTML</div>
          <div>CSS</div>
        </div>
        <div>
          <h2>Back End</h2>
          <div>Node.js</div>
          <div>Next.js</div>
        </div>
        <div>
          <h2>Version Control</h2>
          <div>GIT</div>
        </div>
        <div>
          <h2>Database</h2>
          <div>MySQL</div>
          <div>MongoDB</div>
        </div>
      </div>
      </div>
      <div id="aboutMeContainer">
        <section>
          <p>I am Kyle Hannemann from American Fork, Utah. I am a husband and father of 1, (soon to be 2). 
            I enjoy spending time with my family, playing sports, being outside, and solving puzzles.
            I am am dedicated professional who is constantly looking for ways to improve. I am persistent and resourceful 
            and often obsessive when solving problems. 
          </p>
        </section>
        <div id="slideShowContainer">
          
          <div className="active" id="slide1"></div>
          <div  id="slide2"></div>
          <div  id="slide3"></div>
          <div  id="slide4"></div>
          <div  id="slide5"></div>
          <section id="slideShowControls">
          <button onClick={this.changeSlides}>&#10094;</button>
          <span>
            
            <span data-id="slide1" className="active"></span>
            <span data-id="slide2"></span>
            <span data-id="slide3"></span>
            <span data-id="slide4"></span>
            <span data-id="slide5"></span>
          </span>
          <button id="forwardButtonSlides" onClick={this.changeSlides}>&#10095;</button>
          </section>
          
          
          </div>
       

      </div>
    </div>
  );
  }
}


