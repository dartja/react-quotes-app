import React from "react";
import API from "../../utils/API.js";

class Quotes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            saved: []
        }
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickFavorite = this.onClickFavorite.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ saved: nextProps.saved });
    }

    onClickFavorite(event) {
        var _id = event.currentTarget.getAttribute("data-id");
        var text = event.currentTarget.getAttribute("data-text");
        var favorited = event.currentTarget.getAttribute("data-favorited");
        // console.log(_id + " " + text + " " + favorited);
        API.favoriteQuote({_id, text, favorited}).then((data) => {
        });
    }

    onClickDelete(event) {
        var ID = event.currentTarget.getAttribute("data-id");
        var that = this;
        API.deleteQuote(ID).then((data) => {
            this.setState({saved: data.data});
        });
    }

    render() {
        var saved = this.state.saved;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Saved Quotes</h3>
                </div>
                <div className="panel-body text-center">
                    {saved.map((saved, i) => {
                        return (
                            <p key={i}>
                                {saved.text}
                                <button className="btn btn-default glyphicon glyphicon-trash pull-right" onClick={this.onClickDelete} data-id={saved._id}>
                                    Delete
                                </button>
                                <button className="btn btn-default glyphicon glyphicon-star-empty pull-right" onClick={this.onClickFavorite} data-id={saved._id} data-text={saved.text} data-favorited={saved.favorited}>
                                </button>
                            </p>
                        )
                    })}
                </div>
            </div>
        );
    }
};

export default Quotes;