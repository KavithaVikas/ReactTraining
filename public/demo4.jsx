var Greeter = React.createClass({
  getDefaultProps:function(){

  return{
  message:'Welcome to world of ReactJS!!'
  }
  },

  getInitialState: function(){
  return{
  name:this.props.name,
  message:this.props.message
  };
  },

  onBtnClick:function(e){
  e.preventDefault();

  var nameRef = this.refs.user;
  var name = nameRef.value;
  nameRef.value='';

  var messageRef = this.refs.message;
  var message = messageRef.value;
  messageRef.value='';

  if(typeof name==='string' && name.length>0){
  this.setState({
  name:name
  });
  }

  if(typeof message==='string' && message.length>0){
  this.setState({
  message:message
  });
  }
  },

  render:function(){
  var name = this.state.name;
  var message=this.state.message;
  return(
    <div>
    <h1>Hello {name}</h1>
    <p>{message} + '!!'</p>
    <form onSubmit={this.onBtnClick}>
    UserName: <input type="text" ref="user"/>
    <br/><br/>
    Message:<input type="text" ref="message"/>
      <br/><br/>
    <button> Set Name</button>
    </form>
    </div>
  );
  }
});

ReactDOM.render(<Greeter name="Kavitha" />,document.getElementById('app'))
