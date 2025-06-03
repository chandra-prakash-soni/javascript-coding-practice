function deepClone(obj){
     if (obj === null || typeof obj !== 'object') {
        return obj
    }

    if(Array.isArray(obj)){
        let result = [];
        for(let i=0; i<obj.length; i++){
            result[i] = deepClone(obj[i])
        }
        return result;
    }

    let result = {};

    for(key in obj){
        if(obj.hasOwnProperty(key)){
            result[key] = deepClone(obj[key])
        }
    }
    return result;
}
const original = {
  name: "Chandra",
  age: 34,
  skills: ["JavaScript", "React", "Node"],
  address: {
    city: "Ajmer",
    pincode: 305001,
    location: {
      lat: 26.45,
      lng: 74.64
    }
  },
  isActive: true,
  family: [
    { relation: "wife", name: "Priya" },
    { relation: "kid", name: "Aryan" }
  ]
};

const copied = deepClone(original);

copied.address.city = "Jaipur";
copied.skills.push("TypeScript");

console.log("Original:", original);
console.log("Copied:", copied);