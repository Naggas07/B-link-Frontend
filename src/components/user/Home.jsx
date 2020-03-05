import React, { Component, Fragment } from "react";
import friendServices from "../../services/friendservices";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import eventServices from "../../services/events.services";
import EventResume from "../events/EventResume";
import BusinessDetail from "../BusinessDetail";
import "../../styles/Home.css";
import UserDetail from "../UserDetail";

class Home extends Component {
  state = {
    friends: [],
    events: [],
    follows: []
  };

  allData = () => {
    const { id } = this.props.currentUser;
    friendServices.friends(id).then(friends => this.setState({ friends }));
    friendServices.follows(id).then(follows => this.setState({ follows }));
    eventServices.userEvents(id).then(events => this.setState({ events }));
  };

  componentDidMount() {
    this.allData();
  }

  render() {
    return (
      <Fragment>
        {this.props.currentUser.userType !== "Business" && (
          <div className="container">
            {this.state.events && (
              <div className="events-resume-container">
                <h3 className="header-home">Mis eventos</h3>
                {this.state.events.map((event, i) => (
                  <EventResume key={i} event={event} />
                ))}
              </div>
            )}

            {this.state.follows && (
              <div className="user-follows">
                <h3 className="header-home">Empresas seguidas</h3>
                <div className="follow-home-container">
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
              </div>
            )}

            {this.state.friends && (
              <div className="user-follows">
                <h3 className="header-home">Amigos</h3>
                <div className="follow-home-container">
                  {this.state.friends.map((user, i) => {
                    let userFriend =
                      user.user1.id === this.props.currentUser.id
                        ? user.user2
                        : user.user1;
                    return (
                      <UserDetail
                        key={i}
                        user={userFriend}
                        friendship={this.state.friends[i]}
                        refreshUsers={this.refreshUsers}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {this.props.currentUser.userType === "Business" && (
          <div className="container"></div>
        )}
      </Fragment>
    );
  }
}

export default WithAuthConsumer(Home);
