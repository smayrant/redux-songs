import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{ title: "Hey now!", duration: "4.:05" },
		{ title: "All star", duration: "3.:45" },
		{ title: "I want it that way", duration: "2.:42" },
		{ title: "Emotions", duration: "3.:41" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSongs: selectedSongReducer
});
