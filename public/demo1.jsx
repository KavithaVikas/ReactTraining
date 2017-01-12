var Greeter = React.createClass({
  render:function(){
  var name = this.props.name;
  var message=this.props.message;
  return(
    <div>
    <h1>Hello {name}, {message}</h1>
    <p>This is from a component</p>
    </div>
  );
  }
});

ReactDOM.render(<Greeter name="Kavitha" message="Welcome To React!!"/>,document.getElementById('app'))
