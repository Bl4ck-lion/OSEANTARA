var modalBtns = document.querySelectorAll(".modal-open");

modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    var modal = btn.getAttribute("data-modal");

    document.getElementById(modal).style.display = "block";

    setTimeout(function () {
      document.getElementById(modal).classList.add("visuallyappear");
    }, 20);

    var modalhidden = btn.getAttribute("data-modalhidden");

    document.getElementById(modalhidden).style.scale = "0";
  };
});

var closeBtns = document.querySelectorAll(".modal-close");

closeBtns.forEach(function (btn) {
  btn.onclick = function () {

    btn.closest(".modal").classList.remove("visuallyappear");

    setTimeout(function () {
      (btn.closest(".modal").style.display = "none");
    }, 200);

    var modalappear = btn.getAttribute("data-modalappear")

    setTimeout(function () {
        document.getElementById(modalappear).style.scale = "1";
    }, 200);
  };
});


/* document.addEventListener('DOMContentLoaded', function () {
  const ele = document.getElementsByClassName(".slider");
  ele.style.cursor = 'grab';

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';

      pos = {
          left: ele.scrollLeft,
          top: ele.scrollTop,
          // Get the current mouse position
          x: e.clientX,
          y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele.scrollTop = pos.top - dy * 2;
      ele.scrollLeft = pos.left - dx * 2;
  };

  const mouseUpHandler = function () {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
  };

  // Attach the handler
  ele.addEventListener('mousedown', mouseDownHandler);
}); */

const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };

  slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!mouseDown) { return; }
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  });
  // Add the event listeners
  slider.addEventListener('mousedown', startDragging, false);
  slider.addEventListener('mouseup', stopDragging, false);
  slider.addEventListener('mouseleave', stopDragging, false);
});
