document.addEventListener('DOMContentLoaded', function() {
  const canvasName = 'portfolio-divider';
  let containerWidth = document.getElementById('portfolio').offsetWidth;
  console.log(containerWidth)
  init();

  function init() {
    containerWidth = document.getElementById('portfolio').offsetWidth;
    var canvases = document.getElementsByClassName(canvasName);
    var contexts = [];
    for (var i = 0; i < canvases.length; i++) {
      contexts.push(canvases[i].getContext('2d'));
      setWidth(canvases[i], containerWidth);
      setHeight(canvases[i])
    }
    console.log(contexts)
    contexts.forEach(function(ctx) {
      ctx.clearRect(0, 0, containerWidth, 32);
      drawBorder(ctx);
    })
  }

  function drawBorder(ctx) {

    // ctx.globalCompositeOperation = "destination-out";
    // left circle
    ctx.beginPath();
    ctx.arc(10, 10, 10, 0, 2 * Math.PI);
    ctx.stroke();
    // right circle
    ctx.beginPath();
    ctx.arc(containerWidth - 10, 10, 10, 0, 2 * Math.PI);
    ctx.stroke();
    // middle circle
    ctx.beginPath();
    ctx.arc(containerWidth / 2 - 10, 10, 10, 0, 2 * Math.PI);
    ctx.stroke();
    // dasshed left
    ctx.beginPath();
    ctx.setLineDash([20, 10]);
    ctx.moveTo(20, 10);
    ctx.lineTo(containerWidth / 2 - 20, 10);
    ctx.stroke();
    // dasshed right
    ctx.beginPath();
    ctx.setLineDash([20, 10]);
    ctx.moveTo(containerWidth / 2, 10);
    ctx.lineTo(containerWidth - 20, 10);
    ctx.stroke();
  }

  function setWidth(canvas, w) {
    canvas.setAttribute('width', w)
  }

  function setHeight(canvas) {
    canvas.setAttribute('height', 32)
  }

  window.addEventListener('resize', function () {
    console.log('resize')
    init();
  });
});