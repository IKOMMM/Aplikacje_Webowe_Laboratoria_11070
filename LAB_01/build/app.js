/*
ZAŁOŻENIE PROJEKU
MIN
1. ✅  Utwórz html z statycznymi 4 inputami tekstowymi typu number
2. ✅ Poniżej inputów wyświetl ich sumę, średnią, min, max - wartości powinny się aktualizować po każdej zmianie(można korzystać ze zdarzenia input lub change w polu input)

ROZSZERZENIE PROJEKTU
3. ❌Zamień aplikację na inputy generowane dynamicznie. Liczba generowanych inputów jest pobierana z dodatkowego pola input
4. ❌Wyświetlaj ikone oczekiwania zamiast wyników jeśli aktualnie wprowadzana warość jest nieprawidłowa(lub akutalizuj po wyjściu z pola tekstowego)
5. ❌Dodaj możliwość dynamiczneog usuwania wybranych pól teksotwych (jednego lub wielu na raz)
6. ❌Dodaj klasy - przerób kod na obiektowy
*/
var StatsApp = /** @class */ (function () {
    //Construktor odpowiedzialny za ruszenie startową metodę
    function StatsApp() {
        this.startApp();
    }
    //Metoda startowa - warto projektować w taki sposób
    StatsApp.prototype.startApp = function () {
        this.getAllInputs();
        this.watchAllInputsValues();
    };
    //Pobiera inputy z HTML'a | TODO koncept rozszerzenia - wprowadzenie danych do tablicy
    //Standardowo - metody mają robić jedną funkcjonalność
    StatsApp.prototype.getAllInputs = function () {
        this.number1Input = document.querySelector('#number01');
        this.number2Input = document.querySelector('#number02');
        this.number3Input = document.querySelector('#number03');
        this.number4Input = document.querySelector('#number04');
        this.sumInput = document.querySelector('#sum');
        this.avgInput = document.querySelector('#avg');
        this.minInput = document.querySelector('#min');
        this.maxInput = document.querySelector('#max');
    };
    //Pilnowanie wartości wpisywanych w pola tekstowe
    StatsApp.prototype.watchAllInputsValues = function () {
        var _this = this;
        //this.number1Input.addEventListener('input', this.computeData()); - nie zadziała, bo number1Input jako this.number1Input wywoła funkcję z Inputem computeData.
        this.number1Input.addEventListener('input', function () { return _this.computeData(); });
        this.number2Input.addEventListener('input', function () { return _this.computeData(); });
        this.number3Input.addEventListener('input', function () { return _this.computeData(); });
        this.number4Input.addEventListener('input', function () { return _this.computeData(); });
    };
    StatsApp.prototype.computeData = function () {
        var number1 = +this.number1Input.value;
        var number2 = +this.number2Input.value;
        var number3 = +this.number3Input.value;
        var number4 = +this.number4Input.value;
        var sum = number1 + number2 + number3 + number4;
        var avg = sum / 4;
        var min = Math.min(number1, number2, number3, number4);
        var max = Math.max(number1, number2, number3, number4);
        this.showStats(sum, avg, min, max);
    };
    StatsApp.prototype.showStats = function (sum, avg, min, max) {
        this.sumInput.value = sum.toString();
        this.avgInput.value = avg.toString();
        this.minInput.value = min.toString();
        this.maxInput.value = max.toString();
    };
    return StatsApp;
}());
var statsApp = new StatsApp();
