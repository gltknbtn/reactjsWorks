
var AHelloComponent = React.createClass({

  render: function () {
    return (<p> Hello <strong>{this.props.name}</strong> </p>);
  }
});

ReactDOM.render(<AHelloComponent name="Televole"/>, document.getElementById("gltknbtn"));

var var1 = "other televole";
ReactDOM.render(<AHelloComponent name={var1}/>, document.getElementById("gltknbtn2"));
