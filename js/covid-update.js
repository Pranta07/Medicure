fetch("https://covid-api.mmediagroup.fr/v1/cases?country=Bangladesh")
    .then((res) => res.json())
    .then((data) => showData(data.All));

const showData = (info) => {
    // console.log(info);
    setText("confirmed", info.confirmed);
    setText("deaths", info.deaths);
    setText("recovered", info.confirmed - info.deaths);
    //active cases
    setText("updated", info.updated);
};

const setText = (id, text) => {
    document.getElementById(id).innerText = text;
};
