// Task 1.

// 1.

// let firstName = 'John';
// let lastName = 'Smith';
// let country = 'USA';
// let city = 'Washington';
// let age = 17;
// let isMerried = false;

// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof city);
// console.log(typeof age);
// console.log(typeof isMerried);

// 2.

// console.log('10' === 10); // false

// 3.

// console.log(parseInt('9.8') === 10); // false

// 5.

// console.log(4 > 3); // true
// console.log(4 >= 3); // true
// console.log(4 < 3); // false
// console.log(4 <= 3); // false
// console.log(4 == 4); // true
// console.log(4 === 4); // true
// console.log(4 != 4); // false
// console.log(4 !== 4); // false
// console.log(4 != '4'); // false
// console.log(4 == '4'); //true
// console.log(4 === '4'); // false
// console.log('python'.length !== 'jargon'.length); // false

// 6.

// console.log(4 > 3 && 10 < 12); // true
// console.log(4 > 3 && 10 > 12); // false
// console.log(4 > 3 || 10 < 12); // true
// console.log(4 > 3 || 10 > 12); // true
// console.log(!(4 < 3)); // true
// console.log(!false); // true
// console.log(!(4 > 3 && 10 < 12)); // false
// console.log(!(4 > 3 && 10 > 12)); // true
// console.log(!(4 === '4')); // true
// console.log(!('python'.includes('on') && 'jargon'.includes('on'))); // false

// 7.
// const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getTime());

// Task 2.

// 1.

// const width = +prompt('введите длинну треугольника', '');
// const height = +prompt('введите высоту треугольника', '');
// const square = 0.5 * width * height;
// console.log(square);

// 2.

// const a = +prompt('write a', '');
// const b = +prompt('write b', '');
// const c = +prompt('write c', '');
// console.log(a + b + c);

// 3.

// const width = +prompt('введите длинну треугольника', '');
// const height = +prompt('введите высоту треугольника', '');
// const perimetr = 2 * (width + height);
// const square = width * height * perimetr;

// console.log(perimetr, square);

// 4.

// const radius = 13;
// const PI = 3.14;

// const square = PI * radius * radius;
// const rad = 2 * PI * radius;
// console.log(square, rad);

// 9.

// const hours = 40;
// const rate = 28;
// console.log(hours * rate);

// 10.

// const firstName = 'Simon';

// if (firstName.length > 7) {
//   console.log('ваше имя длинное');
// } else {
//   console.log('ваше имя короткое');
// }

// 11.

// let firstName = 'Asabeneh';
// let lastName = 'Yetayeh';

// if (firstName.length > lastName.length) {
//   console.log(`Твоё имя, ${firstName} длиннее твоей фамилии, ${lastName}`);
// } else {
//   console.log(`Твоё имя, ${firstName} короче твоей фамилии, ${lastName}`);
// }

// 13.

// const myYear = 2006;
// const year = new Date().getFullYear();

// const age = year - myYear;

// if (age >= 18) {
//   console.log(`Вам ${age}. Вы достаточно взрослый, чтобы водить`);
// } else {
//   console.log(`Вам ${age}. Вам будет разрешено водить через ${18 - age} года.`);
// }

// Task 3

// const date = new Date();
// const year = date.getFullYear();
// const month = String(date.getMonth()).length < 2 ? `0${date.getMonth()}` : date.getMonth();
// const day = String(date.getDate()).length < 2 ? `0${date.getDate()}` : date.getDate();
// const hours = String(date.getHours()).length < 2 ? `0${date.getHours()}` : date.getHours();
// const minutes = String(date.getMinutes()).length < 2 ? `0${date.getMinutes()}` : date.getMinutes();

// console.log(`${year}-${month}-${day} ${hours}:${minutes}`);
