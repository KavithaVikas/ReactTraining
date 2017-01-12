var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var message = this.props.message;

      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});


var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name,message);
    }



  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        UserName : <input type="text" ref="name"/><br/><br/>
        Message :  <input type="text" ref="message"/><br/><br/>
        <button>Set Name</button>
      </form>
    );
  }
});



var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name,
        message:this.props.message
    };
  },
  handleNewName: function (name,message) {
    this.setState({
      name: name,
      message:message
    });
    },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName = 'Kavitha';
var message = "Welecome to React";

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
