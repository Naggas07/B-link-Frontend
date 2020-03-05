import React, { Component, Fragment } from "react";
import { WithAuthConsumer } from "../contexts/AuthContext";
import UserServices from "../services/user.services";

import BusinessDetail from "./BusinessDetail";
import friendServices from "../services/friendservices";

class FollowResume extends Component {
  state = {
    business: [],
    follows: [],
    form: {
      text: ""
    }
  };

  handelChange = event => {
    const { name, value, files } = event.target;

    this.setState({
      form: {
        ...this.state.form,
        [name]: files ? files[0] : value
      }
    });
  };

  updated = () => {
    const { id } = this.props.currentUser;
    UserServices.getBusiness().then(business => this.setState({ business }));
    friendServices.follows(id).then(follows => this.setState({ follows }));
  };

  componentDidMount() {
    this.updated();
  }

  render() {
    return (
      <div className="container">
        {/* <div className="container form-user">
          <form className="form-users" onSubmit={this.handelSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control header-form"
                name="text"
                value={this.state.form.text}
                onChange={this.handelChange}
                autoComplete="off"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Search
            </button>
            <button className="btn btn-secondary" onClick={this.reset}>
              Todos
            </button>
          </form>
        </div> */}

        {this.state.follows && (
          <Fragment>
            <h3>Seguidos</h3>
            <div className="total-user-container">
              {this.state.follows.map((follow, i) => (
                <BusinessDetail
                  key={i}
                  user={follow.business}
                  date={follow.createdAt}
                  updated={this.updated}
                  follows={{ user: "ok" }}
                />
              ))}
            </div>
          </Fragment>
        )}

        <h3>Negocios</h3>
        <div className="total-users-container">
          {this.state.business.map((user, i) => (
            <BusinessDetail
              key={i}
              user={user}
              updated={this.updated}
              follows={{}}
            />
          ))}
          {this.state.business.length < 1 && <h3>Usuarios no encontrados</h3>}
        </div>
      </div>
    );
  }
}

export default WithAuthConsumer(FollowResume);
