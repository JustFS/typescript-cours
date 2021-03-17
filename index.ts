// variables
let num1 = 24;
let num2:string;
let numOrString: number | string

// Tableaux
let arr = ['chien', 'chat', 'poisson']
let tableau: string[] = [];
let tableau1: (number | boolean)[] = [];

// Les objets
interface Player {
  id: number,
  name: string,
  jersey?: number
} 

const zidane:Player = {
  id: 0,
  name: "Zidane",
};

// Les classes
class Singer {
  id: number;
  name: string;
  alive?: boolean

  constructor(id: number, name: string, alive?: boolean) {
    this.id = id;
    this.name = name;
    this.alive = alive
  }
}

// Les fonctions
const sayMyName = (name?: string) => {
  console.log(`Bonjour ${name}`);
};

const ageDuCapitaine = (age: number | string, size?:number):void => {
  if (size) {
    console.log(`La taille du capitaine est de ${size}cm et il est agé de : ${age} ans`) 
  } else {
    console.log(`Le capitaine est agé de : ${age} ans`);
  }
}

ageDuCapitaine(16, 185)

// Enum & Tuple
enum Role {ADMIN, PREMIUM, BASIC}

interface User {
  name: string;
  attributes: [number, string];
  role: Role
}

const user1:User = {
  name: "Julien",
  attributes: [42, 'author'],
  role: Role.ADMIN
}

if (user1.role === Role.ADMIN) {
  console.log('connexion spéciale');
  
}
