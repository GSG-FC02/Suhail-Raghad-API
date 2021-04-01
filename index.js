const input = document.querySelector(".text-box")

// event listeners
document.querySelector(".submit-btn").addEventListener('click', displayGlobal);
window.addEventListener('load' , displayCurrent)


// Display Global time
function displayGlobal(){
    document.querySelector(".global-time").innerHTML = " "
    let inputTxt = input.value.trim();
    if (inputTxt == ""){
        alert("please write a location !");
    }
    else{
        fetch(`http://worldtimeapi.org/api/timezone/${inputTxt}`)
    .then(response => {return response.json()})
    .then(data => {

        let locationH2 = document.createElement("h2")
        let locationTxt = document.createTextNode(data.timezone)
        locationH2.appendChild(locationTxt)
        document.querySelector(".global-time").append(locationH2)  

        let timeH2 = document.createElement("h3")
        let timeTxt = document.createTextNode(data.datetime)
        timeH2.appendChild(timeTxt)
        document.querySelector(".global-time").append(timeH2) 
        let newTimeTxt = timeH2.textContent
        timeH2.textContent = newTimeTxt.slice(newTimeTxt.indexOf("T")+1,newTimeTxt.indexOf("."))

        let dateH2 = document.createElement("h3")
        let dateTxt = document.createTextNode(data.datetime)
        dateH2.appendChild(dateTxt)
        document.querySelector(".global-time").append(dateH2) 
        let newDateTxt = dateH2.textContent
        dateH2.textContent = newDateTxt.slice(0,newDateTxt.indexOf("T"))

})
}
    }
    

// Diplay current
function displayCurrent(){
    fetch("http://worldtimeapi.org/api/ip")
    .then(response => {return response.json()})
    .then(data => {
        let locationCurrent = document.createElement("h2")
        let locationTxtCurrent = document.createTextNode(data.timezone)
        locationCurrent.appendChild(locationTxtCurrent)
        document.querySelector(".current-time").append(locationCurrent)  

        let timeCurrent = document.createElement("h3")
        let timeTxtCurrent = document.createTextNode(data.datetime)
        timeCurrent.appendChild(timeTxtCurrent)
        document.querySelector(".current-time").append(timeCurrent) 
        let newTimeTxtCurrent = timeCurrent.textContent
        timeCurrent.textContent = newTimeTxtCurrent.slice(newTimeTxtCurrent.indexOf("T")+1,newTimeTxtCurrent.indexOf("."))

        let dateCurrent = document.createElement("h3")
        let dateTxtCurrent = document.createTextNode(data.datetime)
        dateCurrent.appendChild(dateTxtCurrent)
        document.querySelector(".current-time").append(dateCurrent) 
        let newDateTxtCurrent = dateCurrent.textContent
        dateCurrent.textContent = newDateTxtCurrent.slice(0,newDateTxtCurrent.indexOf("T"))

})
}