import React, {Component} from 'react';

class Selection extends Component {

    render() {
        return (
            <div className="container">
                <div className="row col s6">
                    <select className="browser-default" value={this.props.genre} 
                        onChange={this.props.onGenreChange}> {
                        this.props.genres.map(genre => {
                            return(
                                <option key={genre.id} value={genre.name}>{genre.name}</option>
                            );
                        })
                    }
                    </select>
                </div>
            </div>
        );
    }
}

export default Selection;