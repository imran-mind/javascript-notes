const domContainer = document.querySelector("#root");
console.log(domContainer);

const newElement = React.createElement('p',{className: 'myclass'},'Hello this is imrans paragraph');
console.log('newElement ',newElement)
ReactDOM.render(newElement,domContainer)
