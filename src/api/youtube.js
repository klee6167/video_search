import axios from 'axios';

const KEY = 'AIzaSyCdiOPHtkjK4R9hFactCJBQIAeH2c8bcOk';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});