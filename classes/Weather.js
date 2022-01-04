// Weather class on andmete kättesaamiseks
class Weather {
    constructor(city) {
        this.city = city;
        this.key = "d43b9bc94518afe99cb9ba423d828c5b"
    }

    async getWeather() {
        const response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
        const responseData = await response.json();
        return responseData
    }

    changeCity(city) {
        this.city = city;
    }
}