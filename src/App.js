import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 380px;
	padding: 20px 10px;
	margin: auto;
	border-radius: 4px;
	box-shadow: 0 3px 6px 0 #555;
	background: white;
	font-family: Montserrat;
`;

const AppLabel = styled.span`
	color: black;
	margin: 20px auto;
	font-size: 18px;
	font-weight: bold;
`;
const CloseButton = styled.span`
	padding: 2px 3px;
	background-color: black;
	border-radius: 50%;
	color: white;
	position: absolute;
`;

function App() {
	return <div className="App">Hello</div>;
}

export default App;
