import blessed from 'neo-blessed'

const screen = blessed.screen({
  smartCSR: true
});

screen.title = 'CryptoMSG';

const box = blessed.box({
  top: 'center', left: 'center', width: '100%', height: '100%', border: {
    type: 'line'
  }
});

const chatInput = blessed.input({
  parent: box, bottom: '0', left: '0', width: '99%', height: '60', border: {
    type: 'line'
  }, inputOnFocus: true, style: {
    fg: 'green', focus: {
      border: {
        fg: 'green'
      }
    }
  },
})

screen.append(box);

box.on('click', function (data) {
  box.setContent('qwerty');
  screen.render();
});

box.key('enter', function (ch, key) {
  box.setContent('zxczxc');
  box.setLine(1, 'bar');
  box.insertLine(1, 'foo');
  screen.render();
});

screen.on('keypress', (key) => {
  console.log(key);
});

screen.key(['C-c'], function (ch, key) {
  return process.exit(0);
});

box.focus();
screen.render();
