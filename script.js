let newestnum;
let currentnum;

$(function(){
    gettemp('https://thingspeak.com/channels/113387/field/1.json');
})

function gettemp(url){
    $.get(url, function(data){
        //temp
        //timestamp
        let last_data = new Date(data.feeds[data.feeds.length-1].created_at)

        let timestamp = last_data.getDate()+1 + "."+ (last_data.getMonth()+1) + ". klo " + last_data.getHours() + ":" + last_data.getMinutes()

        $('#temp').text("Lämpötila: "+ data.feeds[data.feeds.length-1].field1 + "°C");
        $('#timestamp').text("Viimeisin data: " + timestamp);

    });
};