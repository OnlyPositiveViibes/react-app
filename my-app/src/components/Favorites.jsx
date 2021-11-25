import React from "react";
import Joke from "./Joke";


class Favorites extends React.Component {
    constructor() {
        super();
        this.state = {
            savedList: [],
        }
    }
    componentDidMount() {
        if (localStorage.length) {
            this.setState((state) => ({
                savedList: state.savedList.concat(JSON.parse(localStorage.getItem('favoritesJokes')))
            }))
        }
    }

    render() {
        console.log(this.state.savedList);
        if (this.state.savedList.length) {


            return (
                <div className="favorites">
                    <h1>Favorites list</h1>
                    <div className="row">
                        {this.state.savedList.map((j)=> <Joke id={j.id} title={j.joke}/>)}
                    </div>
                </div>
            )
        }else {
            return(
                
                    <p>Issaugotu prikolu nera</p>
                
            )
        }
    }
}

export default Favorites