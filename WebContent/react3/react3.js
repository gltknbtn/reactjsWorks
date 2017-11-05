var Bilesen = React.createClass({

  getInitialState: function () {
    return{
      var1:"fdsa"
    }

  },

  componentWillMount() {
   console.log("Bileşen oluşturulacak.")
   this.state.var1="ggg";
},
componentDidMount() {
   console.log("Bileşen oluşturuldu.")
},
componentWillReceiveProps(newProps) {
   console.log("Bileşen yeni props alacak.")
},
shouldComponentUpdate(newProps, newState) {
   // Bileşeni render et.
   return true;
},
componentWillUpdate(nextProps, nextState) {
   console.log("Bileşen güncellenecek.");
},
componentDidUpdate(prevProps, prevState) {
   console.log("Bileşen güncellendi.")
},
componentWillUnmount() {
   console.log("Bileşen DOM'dan silindi")
},

  render:function () {
    // Bileşen render ediliyor.
    console.log("render");
    return (<h1> GltknBtn {this.state.var1} </h1>);
  }
});

ReactDOM.render(<Bilesen/>, document.getElementById("gltknbtn"));
