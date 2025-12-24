import { LinkedList } from "./factories.js";

let list = new LinkedList();

list.append("Dog");
list.append("Cat");
list.append("Bird");
list.append("Fish");

list.prepend("Hamster"); // Should be first in list

console.log(list.toString());
console.log(list.at(1)); // Should be Dog