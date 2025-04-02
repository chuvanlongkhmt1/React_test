import axios from "axios";
async function getPosts() {
	const res = await axios.get("http://localhost:3000/posts");
	return res;
	}
export default getPosts;