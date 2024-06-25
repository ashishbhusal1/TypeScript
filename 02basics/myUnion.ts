let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string;
    id: number
}


type Admin = {
    username: string;
    id: number
}

let ashish: User | Admin = { name: "ashish", id: 12 }
ashish = { username: "as", id: 12 }

// function getDbId(id: number | string) {
//     //making some api calls
//     console.log(`DB id is:${id}`);
// }
// getDbId(3)
// getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === 'string') {
        id.toLowerCase()
    }
}

//array
const data: number[] = [1, 2, 3, 4]
const data1: string[] = ["1", "2", "3", "4"]
const data2: (string | number | boolean)[] = ["1", "2", "3", "4",5,true]


let pi:3.14=3.14

let seatAllotment:"aisle" | "middle"| "window"

seatAllotment="aisle"
//seatAllotment="crew"