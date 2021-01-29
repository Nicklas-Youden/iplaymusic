import Page from "../components/Page";
import "./Login.scss";
import querystring from "querystring";
import random from "../helpers/random";

export default function Login() {
	var state = random(20);
	var options = querystring.stringify({
		response_type: "code",
		client_id: "e734fb09ce11423e8ec459d526ceb050",
		scope: "user-read-private user-read-email",
		redirect_uri: "http://localhost:8888/callback",
		state
	});

	return (
		<Page>
			<a href={`https://accounts.spotify.com/authorize?${options}`} className="loginButton">Log in with <i className="icon-spotify"></i></a>
		</Page>
	);
}
