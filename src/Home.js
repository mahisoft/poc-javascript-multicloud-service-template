import React from 'react';
import logo from '!!url-loader!./react.svg';
import './Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "dbou@mahisoft.com"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("https://us-central1-kamino3.cloudfunctions.net/serverless-multicloud-base/sendNotification", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      mode: "no-cors",
      body: JSON.stringify({
        to: this.state.email,
        data: {
          address: this.state.address,
          name: this.state.name,
          membership: this.state.membership,
          consignee: this.state.consignee
        }
      })
    }).then(res => {
      console.log("Request complete! response:", res);
    });

  }

  render() {
    return (
      <div className="Home">
        <h2>Send product arrival notification </h2>
        <form onSubmit={this.handleSubmit}>
          <div className={"row"}>
            <label className={"label"}>
              To:
            </label>
            <input type="email" name={"email"} value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className={"row"}>
            <label>
              Address:
            </label>
            <input type="text" name={"address"} value={this.state.address} onChange={this.handleChange} />
          </div>
          <div className={"row"}>
            <label>
              Name:
            </label>
            <input type="text" name={"name"} value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className={"row"}>
            <label>
              Membership:
            </label>
            <input type="text" name={"membership"} value={this.state.membership} onChange={this.handleChange} />
          </div>
          <div className={"row"}>
            <label>
              Consignee:
            </label>
            <input type="text" name={"consignee"} value={this.state.consignee} onChange={this.handleChange} />
          </div>
          <input className={"submit-btn"} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Home;
