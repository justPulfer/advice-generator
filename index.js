// Targeting elements in the DOM
const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector(".advice-text");
const btn = document.getElementById("btn");

// Fetching API data using Promises and Async/Await
// We first declare the api link
const apiLink = "https://api.adviceslip.com/advice";

// write an async function to retrieve api data
const apiRetriever = async () => {
	const res = await fetch(apiLink);
	const apiJson = await res.json();
	return apiJson;
};

// Generate the api slip object that is returned to us from the apiRetriever function
const apiGenerator = async () => {
	const apiData = await apiRetriever();
	const apiSlip = apiData.slip;

	// we call Render Advice and pass in the apiSlip
	renderAdvice(apiSlip);
};

// function to render advice to the component
const renderAdvice = (adviceObj) => {
	const { id, advice } = adviceObj;
	adviceId.textContent = `ADVICE #${id}`;
	adviceText.textContent = advice;
};

window.addEventListener("DOMContentLoaded", () => {
	btn.addEventListener("click", apiGenerator);
});
