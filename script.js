



async function search() {

    var year = document.getElementById('topicBox').value
    const apiUrl = `https://calendarific.com/api/v2/holidays?&api_key=KpdjV3BTl7U0oay9ajNN69smIzcgHdQ0&country=IN&year=${year}`;

   document.getElementById('holidayContainer').innerHTML = ''

   await fetch(apiUrl)
        .then(response => {

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then(data => {

            console.log(data.response.holidays);
            var res = data.response.holidays
            res.forEach((elem) =>{
                var holidaycard = document.createElement('div')
                holidaycard.innerHTML = `<div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${elem.name}</h5>
                  <p class="card-text"><span style="color:blue; font-weight: bold;">Date: </span>${elem.date.iso}</p>
                  <p class="card-text"><span style="color:blue; font-weight: bold;">Description: </span>${elem.description}</p>
                 
                  <p class="card-text"><span style="color:blue; font-weight: bold;">Locations: </span>${elem.locations}</p>
                
                </div>
              </div>`

              document.getElementById('holidayContainer').appendChild(holidaycard)
            })

           
        })
        .catch(error => {

            console.error('Fetch error:', error);
        });


}