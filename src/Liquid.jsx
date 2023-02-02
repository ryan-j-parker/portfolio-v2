import React from 'react';

export default function Liquid() {
  const wrapper = document.getElementById('bubble-wrapper');

  const animateBubble = (x) => {
    const bubble = document.createElement('div');

    bubble.className = 'bubble';
    bubble.style.left = `${x}px`;

    wrapper.appendChild(bubble);

    setTimeout(() => wrapper.removeChild(bubble), 2000);
  };

  window.onmousemove = (e) => animateBubble(e.clientX);

  return (
    <div id="bubble-wrapper">
      {/* <div className="bubble" /> */}
      {}
    </div>
  );
}
