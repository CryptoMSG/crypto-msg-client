import blessed from 'neo-blessed'

const screen = blessed.screen({
  smartCSR: true
});

screen.title = 'CryptoMSG';

const box = blessed.box({
  top: '0', left: 'center', width: '100%', height: '95%', border: {
    type: 'line',
    fg: 'yellow',
  }
});

const chatInput = blessed.input({
  parent: screen, bottom: '0', left: 'center', width: '100%', height: '60', border: {
    type: 'line'
  }, inputOnFocus: true, style: {
    border: {
      fg: 'green'
    }
  },
})

chatInput.on('keypress', key => {
  chatInput.setValue('qwd')
})

box.on('click', () => {
  box.setContent('qwerty');
  screen.render();
});

box.key('enter', () => {
  box.setContent('zxczxc');
  box.setLine(1, 'bar');
  box.insertLine(1, 'foo');
  screen.render();
});

screen.key(['C-c'], () => {
  return process.exit(0);
});

screen.append(box);
screen.render();
