const canvai = [
  document.querySelector('#canv1'),
  document.querySelector('#canv2'),
  document.querySelector('#canv3'),
  document.querySelector('#canv4'),
];

console.log(document.querySelector('#canv1'));

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function kaleidoscope() {
  await sleep(62000);

  const clockText = document.querySelector('#clockText');

  for (const l of clockText.textContent) {
    clockText.textContent = clockText.textContent.slice(0, -1);
    await sleep(100);
  }

  await sleep(3000);

  for (let i = 0; i < 1260; i+= 1) {
    for (const canv of canvai) {
      const c = canv.getContext('2d');
      c.lineWidth = 20;
      c.strokeStyle = 'rgb(150, 150, 180)';
      c.lineCap = 'round';

      const offset = 50;
      let curoffset = 50;

      for (let j = 0; j < 5; j += 1) {
        c.beginPath();
        c.moveTo(-curoffset + i % (canv.width * 1.4), 0);
        c.lineTo(canv.width + -curoffset + (i % (canv.width * 1.4)), canv.height);
        c.stroke();

        curoffset += offset;
      }
    }

    await sleep(50);

    for (const canv of canvai) {
      const c = canv.getContext('2d');
      c.clearRect(0, 0, canv.width, canv.height);
    }
  }

  await sleep(2000);

  for (let i = 0; i < 1260; i+= 1) {
    for (const canv of canvai) {
      const c = canv.getContext('2d');
      c.fillStyle  = 'rgb(150, 150, 180)';

      const u = canv.height / 10;
      for (let j = 0; j < 30; j += 1) {
        for (let k = 0; k < 30; k += 1) {

          c.fillRect(
            i % (canv.width * 3) - (j * 20),
            i % (canv.height * 3) - (j * 10 + k * 30),
            10,
            10,
          );
        }
      }
    }

    await sleep(50);

    for (const canv of canvai) {
      const c = canv.getContext('2d');
      c.clearRect(0, 0, canv.width, canv.height);
    }
  }
}

kaleidoscope();
