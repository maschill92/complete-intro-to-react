const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return ce(
    'div',
    null,
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Rick and Morty', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'Silicon Valley', color: 'Peru' })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
