const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let count = 0;
for(const food of foodSchedule){
  if(food.isVegan){
    food.name = fruits[count];
    count++;
  }
}
console.log(foodSchedule)

