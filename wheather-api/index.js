import data1 from "./data.json"
let q = "vung tau";

console.log(data1);

const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${q}&lang=vi`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f51016ddc3msha9c2bab85d069f1p1bb6c0jsn063cf77191e2',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch(url, options).then((response) => {
    return response.json();
}).then((data) => {
    displayTitle(data.location.country, data.location.name);
    displayCondition(data.current.condition.icon, data.current.temp_c, data.current.condition.text);
});

function displayTitle(country, city) {
    let h3 = document.createElement("h3");
    h3.innerText = country + " - " + city;
    document.getElementById("title").appendChild(h3);
}

function displayCondition(img, temp, status) {
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src", img);

    let div = document.createElement("div");
    let h3Temp = document.createElement("h3");
    h3Temp.innerText = temp + " độ C";
    let h3Status = document.createElement("h3");
    h3Status.innerText = status;
    div.appendChild(h3Temp);
    div.appendChild(h3Status);

    document.getElementById("condition").appendChild(imgTag);
    document.getElementById("condition").appendChild(div);
}