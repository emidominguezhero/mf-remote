import { Button } from "./Button";

export function App(): JSX.Element {
	return (
		<main className="main">
			<h1>Just another React app</h1>

			<Button className="button" onClick={() => alert("Clicked!")}>
				Click me
			</Button>
		</main>
	);
}
