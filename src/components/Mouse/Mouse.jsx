import React from 'react';
import './Mouse.css';
import ImageSlider from '../ImageSlider/ImageSlider';

export default function Mouse() {
  const slides = [
    { url: '/mouse/mouse1.jpg', title: 'Mouse' },
    { url: '/mouse/mouse2.jpg', title: 'Mouse' },
    { url: '/mouse/mouse3.jpg', title: 'Mouse' },
    { url: '/mouse/mouse4.jpg', title: 'Mouse' },
    { url: '/mouse/mouse5.jpg', title: 'Mouse' },
    { url: '/mouse/mouse6.jpg', title: 'Mouse' },
    { url: '/mouse/mouse7.jpg', title: 'Mouse' },
    { url: '/mouse/mouse8.jpg', title: 'Mouse' },
    { url: '/mouse/mouse9.jpg', title: 'Mouse' },
    { url: '/mouse/mouse10.jpg', title: 'Mouse' },
    { url: '/mouse/mouse11.jpg', title: 'Mouse' },
    { url: '/mouse/mouse12.jpg', title: 'Mouse' },
  ];

  const containerStyles = {
    height: '500px',
    width: '350px',
    margin: '0 auto',
  };

  return (
    // <div className="mouse">
    //   <img src="/mouse/mouse1.jpg" className="mouse-img" />
    //   <img src="/mouse/mouse2.jpg" className="mouse-img" />
    //   <img src="/mouse/mouse3.jpg" className="mouse-img" />
    //   <img src="/mouse/mouse4.jpg" className="mouse-img" />
    //   <img src="/mouse/mouse5.jpg" className="mouse-img" />
    //   <img src="/mouse/mouse6.jpg" className="mouse-img" />
    //   <img src="/mouse/mouse7.jpg" className="mouse-img" />
    //   <img src="/mouse/mouse8.jpg" className="mouse-img" />
    //   <img src="/mouse/mouse9.jpg" className="mouse-img" />
    //   <img src="/mouse/mouse10.jpg" className="mouse-img" />
    //   <img src="/mouse/mouse11.jpg" className="mouse-img" />
    //   <img src="/mouse/mouse12.jpg" className="mouse-img" />
    <div style={containerStyles}>
      <ImageSlider slides={slides} />
    </div>
    // </div>
  );
}
