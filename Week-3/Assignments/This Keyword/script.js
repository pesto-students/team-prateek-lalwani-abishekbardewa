class Person {
	constructor(name, age, gender, nationality) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.nationality = nationality;
	}
	introduce() {
		return `My name is ${this.name}, I am ${this.age} years old, ${this.gender}, and I am from ${this.nationality}.`;
	}
}

const person1 = new Person('John', 30, 'male', 'USA');
const person2 = new Person('Jane', 24, 'female', 'UK');
const person3 = new Person('Max', 35, 'male', 'Germany');
console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

class Student extends Person {
	constructor(name, age, gender, nationality, subject) {
		super(name, age, gender, nationality);
		this.subject = subject;
	}

	study() {
		return `I am studying ${this.subject}.`;
	}
}
const student1 = new Student('Alice', 20, 'female', 'Canada', 'Computer Science');

console.log(student1.introduce());

console.log(student1.study());
