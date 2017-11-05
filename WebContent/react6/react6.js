var Bilesen = React.createClass({

  componentDidMount(){
    console.log("Bileşen oluşturuldu");
    this.refs.bilesen.innerText = "Bileşen oluşturudu!!!";
  },

  render: function () {
    console.log("Bileşen render ediliyour...");
    return (<p ref="bilesen">Bilesen oluşturuluyor...</p>);
  }
});

ReactDOM.render(<Bilesen/>, document.getElementById("gltknbtn"));
