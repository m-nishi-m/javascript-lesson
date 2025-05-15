//Q1変数
let nickname = '西原';
let age = 23;
console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');

//Q2配列
let languages = ['JavaScript', 'Python', 'Ruby', 'Go', 'Java'];
console.log(`私の好きな言語は ${languages[0]} です。次は${languages[1]}を勉強してみたいです`);

//Q3オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4配列×オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5四則演算
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

//Q6関数
function sayHello() {
  console.log('Hello');
}
sayHello();
let sayWorld = function() {
  console.log("World");
};
sayWorld();

//Q7メソッド
user.birthday = ('2000-09-27');
user.sayHello = function() {
  console.log("Hello!");
};
user.sayHello();

//Q8引数
//和 + 7になる
let calc = {};
calc.add = function(x, y) {
  console.log(x + y);
};
calc.add(3, 4);

//差 - 10になる
calc.subtract = function(x, y) {
  console.log(x - y);
 };
 calc.subtract(20,10);

//積 * 49になる
calc.multiply = function(x, y) {
   console.log(x * y);
 };
 calc.multiply(7, 7);

//商 / 5になる
 calc.divide = function(x, y) {
   console.log(x / y);
 };
 calc.divide(25, 5);

//Q9返り値
function remainder(x, y) {
  let result = x % y;
  return result;
}
let x = 5;
let y = 3;
console.log(x + 'を' + y + 'で割った余りは' + remainder(x, y) + 'です。');

//Q10スコープ
//関数内の変数は関数内でのみスコープが有効になっているため参照されない。(他の部分と変数がぶつからないように。)


//応用編問題
//Q1 標準組み込みオブジェクト
let random = Math.floor(Math.random() * 10);
console.log(random)

//Q2コールバック関数
setTimeout(() => {
  console.log("Hello World!");
}, 3000);

//Q3if
let num = 0;
if (num > 0){
  console.log('num is greater than 0')
}else if (num < 0){
  console.log('num is less than 0')
}else if (num === 0){
  console.log('num is 0')
}

//Q4for
let numbers = []
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}
console.log(numbers);

//Q5for×if 文字列を出し分ける
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++)
if (typeof mixed[i] !== 'number'){
  console.log('not number');
}else if (mixed[i] % 2 == 0){
  console.log('even')
}else {
  console.log('odd')
}

//条件
//Number であり偶数の時は even
//Number であり奇数の時は odd
//Number 以外の時は not number
