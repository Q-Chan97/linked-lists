import { LinkedList } from "./factories.js";

let list = new LinkedList();

let popList = new LinkedList();

list.append("Dog");
list.append("Cat");
list.append("Bird");
list.append("Fish");

list.prepend("Hamster"); // Should be first in list

console.log(list.toString());
console.log(list.at(1)); // Should be Dog

popList.append("Burger King");
popList.append("Wendy's");
popList.append("McDonald's");

console.log(popList.pop()); // Should return McDonald's
console.log(popList.toString()); // Should return Burger King -> Wendy's -> null

console.log(list.contains("Dog")); // Should return true
console.log(list.contains("Kangaroo")); // Should return false

console.log(list.find("Fish"));  // Should return 4

list.insertAt(1, "Jayhawk") // Jayhawk should be the second list element now
console.log(list.toString());

list.remove(3) // Should remove Cat
console.log(list.toString())