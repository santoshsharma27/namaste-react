import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
      },
    };

    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");

    // API Call
    const data = await fetch("https://api.github.com/users/santoshsharma27");
    const json = await data.json();
    console.log(json);

    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <img src={avatar_url} alt="image" />
        <h3>Location: {location}</h3>
        <h4>Contact: 7003189453</h4>
      </div>
    );
  }
}

export default UserClass;
