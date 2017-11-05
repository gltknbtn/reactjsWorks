var HelloMessage = React.createClass({

getInitialState: function () {
  return{
    variable1 : "var1 from gltknbtn",
    variable2 : "var2 from gltknbtn"
  }

},



  render: function () {
    return (<div>
			<h3>Merhaba React</h3>
			<p>Kodcu.com ile React öğreniyorum.</p>
      <h1>{this.state.variable1}</h1>
      <h2>{this.state.variable2}</h2>
		</div>);
  }
});

ReactDOM.render(<HelloMessage />, document.getElementById('root'));
