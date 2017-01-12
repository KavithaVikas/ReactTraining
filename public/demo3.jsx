var Greeter = React.createClass({
  getDefaultProps:function(){

  return{
  message:'Welcome to world of ReactJS!!'
  }
  },

  getInitialState: function(){
  return{
  name:this.props.name
  };
  },

  onBtnClick:function(e){
  e.preventDefault();

  var nameRef = this.refs.user;
  var name = nameRef.value;
  nameRef.value='';

  if(typeof name==='string' && name.length>0){
  this.setState({
  name:name
  });
  }
  },

  render:function(){
  var name = this.state.name;
  var message=this.props.message;
  return(
    <div>
    <h1>Hello {name}</h1>
    <p>{message} + '!!'</p>
    <form onSubmit={this.onBtnClick}>
    <input type="text" ref="user"/>
    <button> Set Name</button>
    </form>
    </div>
  );
  }
});

ReactDOM.render(<Greeter name="Kavitha" />,document.getElementById('app'))
