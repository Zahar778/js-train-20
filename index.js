/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
  //  Записуємо в this.brand значення аргументу brand, в this.model значення аргументу model і так далі зі всіма аргументами
}

// Рядковому представленню Vehicle призначаємо функцію, яка повертає рядок: <brand> <model> <year>
Vehicle.prototype.toString = function() {
  return `${this.brand} ${this.model} ${this.year}`;
};

Vehicle.prototype.valueOf = function() {
  return this.mileage; // Перевизначаємо метод valueOf, щоб повертав пробіг як примітивне значення
};

/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

// Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType) {
  Vehicle.call(this, brand, model, year, mileage); 
  this.fuelType = fuelType;
  this.speed = 0;
}

Car.prototype.toString = function() {
  return `${this.brand} ${this.model} ${this.year} - ${this.fuelType}`;
};

// Створюємо метод accelerate для прискорення швидкості прототипу Car
Car.prototype.accelerate = function(increase) {
  this.speed += increase;
  console.log(`Автомобіль ${this.brand} ${this.model} прискорився до швидкості ${this.speed} км/год.`);
};

// Метод brake для гальмування прототипу Car
Car.prototype.brake = function(decrease) {
  this.speed -= decrease;
  console.log(`Автомобіль ${this.brand} ${this.model} зменшив швидкість до ${this.speed} км/год.`);
};

// Створюємо новий екземпляр об'єкта Car
/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */

const myCar = new Car("Audi", "A6", 2018, 30000, "Petrol");

console.log(myCar.toString()); 
console.log(myCar.valueOf()); 
myCar.accelerate(50); 
myCar.brake(20); 

// Виводимо властивості нового екземпляра на консоль

// Викличемо функції toString та valueOf об'єкта car

// Використовуємо методи для прискорення та передаємо 50

// Використовуємо методи для гальмування та передаємо 20

/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  Vehicle.call(this, brand, model, year, mileage);
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
  // Викликаємо Vehicle.call та передаємо в нього: this, brand, model, year, mileage
  //  Записуєм в this.color значення аргументу color, в this.engineType значення аргументу engineType і так далі зі всіми аргументами
}

Truck.prototype.specific = function(weight) {
  if (weight <= this.towingCapacity) {
    console.log("Тягнення навантаження...");
  } else {
    console.log("Навантаження занадто важке для буксирування.");
  }
};
// Додатковий метод specific для прототипу Trucks, примає число якщо воно більше towingCapacity виводить рядок в консоль: Навантаження занадто важке для буксирування, якщо ні то рядок Тягнення навантаження...

// Створюємо новий екземпляр об'єкта Truck
/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */
const myTruck = new Truck("Toyota" , "Tundra",2019,20000,"Red","V8", 10000,"Gasoline","Automatic",4,5600)

// Викликаємо метод tow з вагою меншою за towingCapacity

// Викликаємо метод tow з вагою більшою за towingCapacity
myTruck.specific(8000); 
myTruck.specific(12000);

// Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.
Car.prototype.drive = function(kilometers) {
  this.kilometers += kilometers;
  console.log(`Подорожуємо ${kilometers} кілометрів у ${this.brand} ${this.model}.`);
};
const driveWithMyCar = myCar.drive.bind(myCar);
driveWithMyCar(100);
// Використовуємо bind для зв'язування методу drive з конкретним об'єктом car.
// Це створює нову функцію, в якій this постійно встановлено на car, незалежно від того, як функцію викликають.
// Викликаємо функцію зі значенням 100,

/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  if (!new.target) {
    throw new Error("Конструктор має бути викликаний з 'new'");
  }
  Car.call(this, brand, model, year, mileage);
  this.batteryCapacity = batteryCapacity;
  // Перевіряємо, чи функцію було викликано з new, якщо ні виволимо помилку "Конструктор має бути викликаний з 'new'"
  // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage
  //  Записуєм в this.batteryCapacity значення аргументу batteryCapacity
}

// Перевизначаємо toString для прототипу ElectricCar він має повертати <brand> <model> <year> - Батарея: <batteryCapacity> kWh
ElectricCar.prototype.toString = function() {
  return `${this.brand} ${this.model} ${this.year} - Батарея: ${this.batteryCapacity} kWh`;
};
// Створюємо новий екземпляр ElectricCar
/*
 * Екземпляр об'єкту: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */

// Викликаємо метод toString об'єкту tesla та виводимо в консоль
const tesla = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);
console.log(tesla.toString()); 