const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Stafford',
    }),
    React.createElement(Pet, {
      name: 'Chuck',
      animal: 'Dog',
      breed: 'Stafford',
    }),
    React.createElement(Pet, {
      name: 'Cluck',
      animal: 'Dog',
      breed: 'Stafford',
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.querySelector('#root'));
