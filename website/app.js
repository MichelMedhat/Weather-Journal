const baseUrl = "http://api.openweathermap.org/data/2.5/weather?APPID=";
const key = 'c37a03dd3918e4189c84512539f97a03';
const zipCode = document.getElementById('zip');
const feelings = document.getElementById('feelings');
const generateButton = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

generateButton.addEventListener('click', function(){
    fetch(baseUrl + key + "&zip=" + zipCode.value)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        postData('/add', {
            temp: data.main.temp,
            date: newDate,
            userResponse: feelings.value
        });
        updateUserInterface('/all');
    });
});

const postData = async ( url = '', data = {})=>{
    console.log(data)
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),       
    }); 
    try {
        const newData = await response.json();
    } catch(error) {
        console.log("error", error);
    }
}

async function updateUserInterface(url) {
    let response = await fetch(url);
    const date = document.getElementById('date');
    const temp = document.getElementById('temp');
    const userResponse = document.getElementById('content');

    try {
        let data = await response.json();
        console.log(data);
        temp.innerHTML = data.temp;
        date.innerHTML = data.date;
        userResponse.innerHTML = data.userResponse;
    } catch (error) {
        console.log(error);
    }
}
