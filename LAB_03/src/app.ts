export class App {
    opwApiKey = '50d53005c0fd5f556bb4ef15224c4209';  

    

    constructor() {
        this.getCityInfo('zakopane')
    }

    async getCityInfo(city: string) {
        const weather = await this.getWeather('zakopane');
        this.saveData(weather);
    }

    async getWeather(city: string): Promise<any> {//asynchroniczna metoda, zwraca zawsze objekt Promise 
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`; //Zapytanie o pogodę
        const weatherResponse = await fetch(openWeatherUrl);//pobiera wartość z obietnicy i przypisuje obiekt z jsona z API
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }

    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }

    getData() {//pobranie danych z localStorage
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {//jeżeli użytkownik nic nie dodał
            return {};
        }
    }
}