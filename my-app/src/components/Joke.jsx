import React from "react";
import { Link } from "react-router-dom"
let favoritesList = [];

class Joke extends React.Component {
    constructor() {
        super();
        this.handleAddFavorites = this.handleAddFavorites.bind(this)
    }

    handleAddFavorites() {
        let obj = {};
        obj["id"] = this.props.id;
        obj["joke"] = this.props.title;
        obj["categories"] = [];
        favoritesList.push(obj);
        localStorage.setItem("favoritesJokes", JSON.stringify(favoritesList))
    }
    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.id}</h5>
                    <p className="card-text">{this.props.title}</p>
                    <p>{this.props.status}</p>
                    {this.props.status === "notSaved" ? (<Link to="/favorites" className="btn btn-primary" onClick={this.handleAddFavorites}>Add to favorites </Link>) : null}

                </div>
            </div>
        )
    }
}

export default Joke