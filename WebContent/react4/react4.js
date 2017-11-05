
var Acomponent = React.createClass({

  getInitialState : function () {
    return({
      count : 0,
      count2 : 0,
      input1Text:"",
    });
  },

  aButtonListener : function (event) {
    console.log("aButtonListener");
    
    event.target.innerText = "button clicked !!!";
    
    this.setState({count : this.state.count + 1,
                   count2: this.state.count2 + 2,
                   input1Text: document.getElementById("input1").value
                 });


  },

  render: function() {
    console.log("render");
    return (<div>
              <button onClick={this.aButtonListener}>Click Me</button>
              <br/>
              <label> {this.state.count}</label>
              <br/>
              <label> {this.state.count2}</label>
              <br/>
              <label> {this.state.input1Text}</label>
              <br/>
              <input id="input1" />
           </div>
    );
  }

});

ReactDOM.render(<Acomponent/>, document.getElementById("gltknbtn"));
