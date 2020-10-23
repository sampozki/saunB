$(function(){
    gettemp('https://thingspeak.com/channels/113387/field/1.json');
})

function gettemp(url){
    $.get(url, function(data){
        let last_data = new Date(data.feeds[data.feeds.length-1].created_at)
        let timestamp = last_data.getDate()+1 + "."+ (last_data.getMonth()+1) + ". klo " + last_data.getHours() + ":" + last_data.getMinutes()

        $('#temp').text("Lämpötila: "+ data.feeds[data.feeds.length-1].field1 + "°C");
        $('#timestamp').text("Viimeisin data: " + timestamp);

        $("meta[property='og\\:title']").attr("content", "Lämpötila: "+ data.feeds[data.feeds.length-1].field1 + "°C");
        $("meta[property='og\\:description']").attr("content", "Viimeisin data: " + timestamp);


    });
};