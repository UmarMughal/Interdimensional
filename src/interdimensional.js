!(function(window, document) {
  'use strict';

  var isCharged = false;
  var control;

  function handleTouchStartEvent() {
    control.classList.add('interdimensional-control-is-active');
  }

  function handleTouchMoveEvent(e) {
    var touch = e.changedTouches[0];

    e.preventDefault();

    control.style.top = touch.clientY + 'px';
    control.style.left = touch.clientX + 'px';
  }

  function handleTouchEndEvent() {
    control.classList.remove('interdimensional-control-is-active');
  }

  function Interdimensional() {}

  Interdimensional.charge = function() {
    if (isCharged) {
      return this;
    }

    isCharged = true;

    control = document.createElement('div');
    control.className = 'interdimensional-control';
    document.body.appendChild(control);

    // Set a starting position
    control.style.position = 'fixed';
    control.style.top = '100%';
    control.style.right = 0;
    control.style.bottom = 0;
    control.style.left = '50%';
    control.style.margin = 0;
    control.style.marginTop = -control.offsetHeight / 2 + 'px';
    control.style.marginLeft = -control.offsetWidth / 2 + 'px';

    // Add event listeners
    control.addEventListener('touchstart', handleTouchStartEvent, false);
    control.addEventListener('touchmove', handleTouchMoveEvent, false);
    control.addEventListener('touchend', handleTouchEndEvent, false);
    control.addEventListener('touchcancel', handleTouchEndEvent, false);

    return this;
  };

  Interdimensional.jump = function() {
    if (!isCharged) {
      return this;
    }

    return this;
  };

  Interdimensional.kick = function() {
    if (!isCharged) {
      return this;
    }

    return this;
  };

  Interdimensional.discharge = function() {
    if (!isCharged) {
      return this;
    }

    return this;
  };

  window.Interdimensional = Interdimensional;
})(window, document);
