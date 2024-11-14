const original = {
  name: "John",
  address: {
    city: "New York",
    country: "USA",
  },
};

//structuredClone(obj) Можно так ,но думаю суть этой задачи написать такое решение самому
function deepClone(obj) {
//Если ключ является объектом,тогда клону задать массивв либо обьект в зависимости от типа obj
  if (typeof obj === "object") {
    const clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      clone[key] = deepClone(obj[key]); //В ключ клона записываем значение с повторного вызова функции,но только проитерировавшись в value 
    }
    return clone;
  }
}
const copy = deepClone(original);
copy.address.city = "Los Angeles";
console.log(original.address.city); // New York (оригинальный объектне должен измениться)
console.log(copy.address.city); // Los Angeles
