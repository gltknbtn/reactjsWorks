var Bilesen = React.createClass({

getInitialState: function () {
  // renk değerini tutabilmek için state tanımlayalım
  return {renk: 'coral'};
},

kirmiziYap(yeniRenk){
  this.setState({renk: 'red'});
},
yesilYap(yeniRenk){
  this.setState({renk: 'green'});
},
maviYap(yeniRenk){
  this.setState({renk: 'blue'});
},


  render: function () {
    return(
           <div style={{backgroundColor:this.state.renk, padding:20}}>
            <button onClick={this.kirmiziYap}>Kırmızı</button>
            <button onClick={this.yesilYap}>Yeşil</button>
            <button onClick={this.maviYap}>Mavi</button>

           </div>
         );
  }
});

ReactDOM.render(<Bilesen/>, document.getElementById("gltknbtn"));
