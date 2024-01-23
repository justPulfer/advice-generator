// Fetch API data using Promises and Async/Await
const apiLink = "https://api.adviceslip.com/advice";

const adviceGeneratorObj = async () => {
	const res = await fetch(apiLink);
	const adviceObj = await res.json();
	return adviceObj;
};

adviceGeneratorObj();

// const advice = async () => {
// 	const { id, advice } = adviceGeneratorObj;
// };
