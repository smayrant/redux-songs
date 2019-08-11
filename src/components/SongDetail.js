import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
	return (
		<div>
			{props.details ? (
				<div>
					<h1>Song Details</h1>
					<h3>Title: {props.details.title}</h3>
					<h3>Duration: {props.details.duration}</h3>
				</div>
			) : (
				<div>Please select a song</div>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	return { details: state.selectedSongs };
};

export default connect(mapStateToProps)(SongDetail);
