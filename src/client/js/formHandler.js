function numDaysBetweenDates(dateA,dateB){

    let date1 = new Date(dateA); 
    let date2 = new Date(dateB); 
  
    let diffInTime = date2.getTime() - date1.getTime(); 
    let diffInDays = diffInTime / (1000 * 3600 * 24); 
    return diffInDays;
  }


function handleSubmit(event) {
    event.preventDefault()

    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let lat =  document.getElementById('lat').value;
    let lon = document.getElementById('lon').value;

    console.log("::: Form Submitted :::")

    let d = new Date();
    let now = d.toString();

    let numUntilTrip = parseInt(numDaysBetweenDates(now,startDate));

    console.log(numUntilTrip);

    let lengthOfTrip = numDaysBetweenDates(startDate,endDate);

    if (numUntilTrip <= 16){

        fetch('/weather',{
            method: 'POST', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({city:city,state:state,startDate:startDate,endDate:endDate})
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('weather').innerHTML = res.data[numUntilTrip].temp;
            
        })

    }

    else{
        document.getElementById('weather').innerHTML = "Too far in the future";
    }


    document.getElementById('length').innerHTML = lengthOfTrip+" days";
    
    fetch('/img',{
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({city:city,state:state})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById("loadImage").src = res.hits[0].webformatURL;
        
    })
    
    
    fetch('/coordinates',{
        method: 'POST', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({city:city,state:state})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('lat').innerHTML = res.geonames[0].lat;
        document.getElementById('lon').innerHTML = res.geonames[0].lng;
        
    })

}

export { handleSubmit }
//When running test - uncheck the bottom line and check the above line
//module.exports = handleSubmit;
