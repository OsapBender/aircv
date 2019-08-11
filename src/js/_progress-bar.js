window.onload = function onLoad() {
  const data = {
    css: 81,
    html5: 94,
    javascript: 50,
    photoshop: 29,
  };
  const progressList = document.querySelector('.about__progress-list');
    for (const [key, val] of Object.entries(data)) {
      const el = document.createElement('div');
      el.classList.add('about__progress-list-item');
      el.innerHTML = `<h5>${key}</h5>`;
      progressList.appendChild(el);

      const lineBar = new ProgressBar.Line(el, {
        strokeWidth: 0.5,
        trailWidth: 0.5,
        from: {
          color: "#17bed2"
        },
        to: {
          color: "#17bed2"
        },
        text: {
          value: '0',
          className: 'progress-text',
          style: {
            position: 'absolute',
            top: '-30px',
            right: 0,
            padding: 0,
            margin: 0,
            transform: null
          }
        },
        step: (state, shape) => {
          shape.path.setAttribute("stroke", state.color);
          shape.setText(Math.round(shape.value() * 100) + ' %');
        }
      });

      lineBar.animate(val / 100, {
        duration: 1500
      });
    }
  }
