#!/usr/bin/env node

import blessed from 'neo-blessed'

const screen = blessed.screen({
  smartCSR: true
});

screen.title = 'CryptoMSG';

const box = blessed.box({
  top: '0', left: 'center', width: '100%', height: '95%', border: {
    type: 'line', fg: 'yellow',
  }
});

const chatInput = blessed.textarea({
  parent: screen, input: true, bottom: '0', left: 'center', width: '100%', height: '60', border: {
    type: 'line'
  }, style: {
    border: {
      fg: 'green'
    }
  },
})

chatInput.on('click', () => {
  chatInput.focus()
  screen.render();
})

chatInput.key('enter', () => {
  box.setContent('zxczxc');
  screen.render();
})

chatInput.readInput(key => {
  // console.log(key);
})

box.on('click', () => {
  box.setContent('qwerty');
  screen.render();
});

box.key('enter', () => {
  box.setContent('zxczxc');
  screen.render();
});

screen.key(['C-c'], () => {
  return process.exit(0);
});

screen.append(box);
screen.render();
