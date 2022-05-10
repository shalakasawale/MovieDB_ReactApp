import React, {Component} from 'react';

class UpvoteTut extends Component {

    state = {
        colors: [],
    }
    
    componentDidMount = () => {
        this.fetchColors();
    };

    fetchColors = () => {
        fetch("http://localhost:8080/generic")
        .then(response => console.log(response))
        .then(data => this.storeColors(data))
        .catch(error => console.log(error));
    }

    storeColors= (data) => {
        const colors = data.results.map(result => {
            const  { color, category, type, code } = result;
            return { color, category, type, code };
        })
        this.setState({
            colors: colors
        });
    }

    render() {
        return (
            <div className="container center">
                <div className="row">
                {
                    this.state.colors.map((colorObject) => {
                        return (
                            <h6>{colorObject.category}</h6>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}

export default UpvoteTut;