let data = [
    {category:"Fruit",name:"Apple"},
    {category:"Vegetable",name:"Carrot"},
    {category:"Fruit",name:"Mango"},
    {category:"Flower",name:"Rose"},
    {category:"Flower",name:"Lilly"},
    {category:"Vegetable",name:"LadyFinger"},
    {category:"Fruit",name:"Banana"},
    {category:"Fruit",name:"Stawberry"},
    {category:"Vegetable",name:"Patato"},
    {category:"Flower",name:"SunFlower"},
]

{/*
    Output must be in Grouping by Category
{
    Fruit:[{name:"Apple"}]
    Vegetable:[{Name:"patato"},....]
    Flower : [....]
}
*/}


function groupBy(arr,key){
    const grouped = {};

    arr.map(item=>{
        const group = item[key];
        const {[key]:_,...rest} = item;
        if(!grouped[group]){
            grouped[group] = [];
        }
        grouped[group].push(rest);
    })

    return grouped;

}


console.log(groupBy(data,"category"))
