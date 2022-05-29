// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//tipe data dan struktur data yang digunakan :
//name : String
//gender : String
//age : integer
//email : String
//favoriteColor : Set
//isHavePet : String
//education : array
//favoriteRestaurant : Set

//Data Monica
const colorMonica = ["Yellow", "Pink", "White", "Purple"];
const restoMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];
const edumonica = ["name: SD 01, city: Jakarta, graduate: 2016", "name: SMP 02, city: Jakarta, graduate: 2019","name: 'SMA 03', city: 'Tangerang"]

let setcolorMonica = new Set(colorMonica);
let setrestoMonica = new Set(restoMonica);

const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 17,
    email : "monica@dingdong.com",
    favoriteColor : [...setcolorMonica],
    isHavePet : "Yes",
    education : edumonica,
    favoriteRestaurant : [...setrestoMonica]
};

//Data Wendy
const colorWendy = ["Blue", "Black", "Grey"];
const restoWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];
const eduWendy = ["name: SD 02, city: Jakarta, graduate: 2010", "name: SMP 03, city: Bogor, graduate: 2013","name: SMA 01, city: Surabaya, graduate: 2016","name: Universitas Maju, city: Tangerang"]

let setcolorWendy = new Set(colorWendy);
let setrestoWendy = new Set(restoWendy);

const secondUser = {
    name : "Wendy",
    gender : "Male",
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor : [...setcolorWendy],
    isHavePet : "No",
    education : eduWendy,
    favoriteRestaurant : [...setrestoWendy]
};



// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};