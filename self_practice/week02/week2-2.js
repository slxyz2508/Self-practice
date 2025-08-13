//Shallow Equality
function shallowEquality(object1,object2){
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if (keys1.length !== keys2.length){
        return false // เช็คkeys ของ value ว่ามีความยาวเท่ากันไหม
    }
    for(let key of keys1){
        if (object1[key] !== object2[key]){
            return false //เช็คว่า key มันเหมือนกันไหม
        }
    }
    return true
}
let book1 = {
    isbn : 1234,
    title: 'JS',
}
let book2 = {
    isbn : 1234,
    title: 'JS',
}

console.log("shallow equality:" + shallowEquality(book1,book2));

//เป็นการเช็คcompare ระหว่าง 2 object โดยขั้นตอนแรกจะเช็คจากความยาวถ้าความยาวของ key ไม่เท่ากัน return false
//จากนั้นทำการวนลูปเอา ค่าของ key มันออกมาเช็คว่าทั้งสองฝั่งแต่ละตำแหน่งนั้นเหมือนกันไหม ถ้าไม่ return false 
//ต่อให้เปลี่ยน ชื่อ key แต่ความยาวเท่าเดิม จะยังคง return ว่า false เพราะเขียนไม่เหมือนกัน
