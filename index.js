"use strict";
// variables
var num1 = 24;
var num2;
var numOrString;
// Tableaux
var arr = ['chien', 'chat', 'poisson'];
var tableau = [];
var tableau1 = [];
var zidane = {
    id: 0,
    name: "Zidane",
};
// Les classes
var Singer = /** @class */ (function () {
    function Singer(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
    return Singer;
}());
// Les fonctions
var sayMyName = function (name) {
    console.log("Bonjour " + name);
};
var ageDuCapitaine = function (age, size) {
    if (size) {
        console.log("La taille du capitaine est de " + size + "cm et il est ag\u00E9 de : " + age + " ans");
    }
    else {
        console.log("Le capitaine est ag\u00E9 de : " + age + " ans");
    }
};
ageDuCapitaine(16, 185);
// Enum & Tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
var user1 = {
    name: "Julien",
    attributes: [42, 'author'],
    role: Role.ADMIN
};
if (user1.role === Role.ADMIN) {
    console.log('connexion spéciale');
}
