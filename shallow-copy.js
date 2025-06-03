const original = {
  name: "Chandra",
  skills: ["JS", "React"]
};


const  shallow = {...original}


shallow.name = "Prakash"

shallow.skills.push("Redux")



console.log("original",original);

console.log("shallow",shallow);