import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <>
      <div className="main">
        {/*  this is the original 8x8 grid  */}
        {/* <div className="parent">
          <div className="div1"><img className="headshot" src="/ryanparker34.png" title="Ryan J. Parker, software developer" alt="image of a smiling man standing in front of foliage" /></div>
          <div className="div2"><h4>I like to make web apps that are beautiful to look at, intuitive to use, and scalable across devices.</h4></div>
          <div className="div3"><h1>Hi!</h1><h2>My name is Ryan Parker.</h2></div>
          <div className="div4"><h3>I&apos;m a creative software developer located in Vancouver, WA.</h3></div>
          <div className="div5"><img className="icon" title="React.js" src="/react-icon.png" /></div>
          <div className="div6"><img className="icon" title="Express.js" src="/express-icon.png" /></div>
          <div className="div7"><img className="icon" title="Three.js" src="/threejs-icon.png" /></div>
          <div className="div8"><img className="icon" title="Supabase" src="supabase-icon.png" /></div>
          <div className="div9"><h3>I&apos;m currently developing with React.js, Express.js, and Three.js.</h3></div>
        </div> */}

        {/* this is the new experimental grid */}
        <div className="parent">
          <div className="div1">1</div>
          <div className="div2">2</div>
          <div className="div3">3</div>
          <div className="div4">
            <img
              className="headshot"
              src="/ryanparker34.png"
              title="Ryan J. Parker, software developer"
              alt="image of a smiling man standing in front of foliage"
            />
          </div>
          <div className="div5">
            <a href="/mouse">
              <img src="/mouse/mouse1.jpg" className="mouse-main" />
            </a>
          </div>
          <div className="div6">6</div>
          <div className="div7">
            <h1 className="hi">Hi!</h1>
            <h2 className="ryan">My name is Ryan Parker.</h2>
          </div>
          <div className="div8">
            <h3 className="creative">
              I&apos;m a creative software developer located in Vancouver, WA.
            </h3>
          </div>
          <div className="div9">
            <h3 className="mousecode">You can usually find me writing code with Mouse.</h3>
          </div>
          <div className="div10">10</div>
          <div className="div11">11</div>
          <div className="div12">12</div>
          <div className="div13">
            <a href="http://github.com/ryan-j-parker" target="_blank" rel="noreferrer">
              <img src="/github-icon-white.png" className="icon" />
            </a>
            <a href="http://linkedin.com/in/ryanparkerdev" target="_blank" rel="noreferrer">
              <img src="/linkedin-icon.png" className="icon" />
            </a>
            <a href="http://twitter.com/ryanparkerdev" target="_blank" rel="noreferrer">
              <img src="/twitter-icon.png" className="icon" />
            </a>
          </div>
        </div>
      </div>
      <a href="/mouse">
        <button className="mouse-btn">to Mouse gallery</button>
      </a>
      <a href="/scene">
        <button className="scene-btn">to 3d sandbox</button>
      </a>
      <a href="/alt">
        <button className="alt-btn">to sandbox v2</button>
      </a>
    </>
  );
}
