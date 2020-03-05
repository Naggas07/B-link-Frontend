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
    follows: [],
    business: [],
    followers: []
  };

  allData = () => {
    const { id } = this.props.currentUser;
    friendServices.friends(id).then(friends => this.setState({ friends }));
    friendServices.follows(id).then(follows => this.setState({ follows }));
    eventServices.userEvents(id).then(events => this.setState({ events }));
    eventServices
      .businessEvents(id)
      .then(business => this.setState({ business }));
    eventServices.followers(id).then(followers => this.setState({ followers }));
  };

  componentDidMount() {
    this.allData();
  }

  render() {
    const { events, business, followers, follows, friends } = this.state;
    const moves =
      events.length > 0 ||
      business.length > 0 ||
      followers.length > 0 ||
      follows.length > 0 ||
      friends.length > 0;
    console.log(moves);
    return (
      <Fragment>
        {!moves && (
          <div className="container">
            <h1>Sin movimientos</h1>{" "}
          </div>
        )}
        {this.props.currentUser.userType !== "Business" && (
          <div className="container margenes">
            {this.state.events.length > 0 && (
              <div className="events-resume-container">
                <h3 className="header-home">Mis eventos</h3>
                {this.state.events.map((event, i) => (
                  <EventResume key={i} event={event} />
                ))}
              </div>
            )}

            {this.state.follows.length > 0 && (
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

            {this.state.friends.length > 0 && (
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
          <div className="container margenes">
            {this.state.business.length > 0 && (
              <div className="events-resume-container">
                <h3 className="header-home">Mis eventos</h3>
                {this.state.business.map((event, i) => (
                  <EventResume key={i} event={event} />
                ))}
              </div>
            )}
            {this.state.followers.length > 0 && (
              <div className="user-follows">
                <h3 className="header-home">Tes iguen</h3>
                <div className="follow-home-container">
                  {this.state.followers.map((follow, i) => (
                    <BusinessDetail
                      key={i}
                      user={follow.userFollow}
                      date={follow.createdAt}
                      updated={this.updated}
                      follows={{ user: "ok" }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Fragment>
    );
  }
}

export default WithAuthConsumer(Home);
