let weather={
    apikey:"e0b18bcca77b7e69cd50dda5e73aa5c0",
    fetchHavaDurumu:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city+"&units=metric&lang-tr&appid="+this.apikey
        ).then((response)=>response.json())
        .then((data)=>this.datahavadurumu(data));
    },
    datahavadurumu : function(data){
        var {name}=data;
        var {description}=data.weather[0];
        var {temp,humidity}=data.main;
        var {speed}=data.wind;
        document.querySelector(".sehir").innerText=name + " İçin Hava Durumu";
        document.querySelector(".durum").innerText=description;
        document.querySelector(".derece").innerText=temp + "°C";
        document.querySelector(".nem").innerText="Nem : "+humidity+"%";
        document.querySelector(".ruzgar").innerText="Rüzgar Hızı : "+speed+" km/s"
        
    },
    arama:function(){
        this.fetchHavaDurumu(document.querySelector(".arama-motoru").value);
    },
}
    document.querySelector(".arama button").addEventListener("click",function(){
        weather.arama();
    });
    document.querySelector(".arama-motoru").addEventListener("keyup",function(e){
    if(e.key=="Enter"){
        weather.arama();
        }
    });
    weather.fetchHavaDurumu("İstanbul");