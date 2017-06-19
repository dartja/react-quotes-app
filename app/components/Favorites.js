import React, {Component} from "react";
import Quotes from "./components/Quotes";
import API from "../utils/API";

var Favorites = React.createClass({
	getInitialState: function(){
		this.getFavoriteQuotes();
		return({
			quoteList: []
		});
	},
	getFavoriteQuotes: function(){
		var this = this;
		API.getQuotes().then(function(response){
			console.log("Added "+response+" from the db");
			var favArr = [];
			for(var i = 0; i < response.data.length; i++){
				if(response.data[i].favorited){
					favArr.push(response.data[i])
				}
			}
			console.log(favArr);
			this.setState({quoteList: favArr});
		})
	},
	render: function(){
		return(
			<div>
			  <h1 className="center-align">Favorite Quotes</h1>
			  <Quotes quoteList={this.state.quoteList} 
			  getUpdate={this.getFavoriteQuotes}/>
		  	</div>
		);
	}
});

export default Favorites;