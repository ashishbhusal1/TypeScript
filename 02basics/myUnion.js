var score = 33;
score = 44;
score = "55";
var ashish = { name: "ashish", id: 12 };
ashish = { username: "as", id: 12 };
// function getDbId(id: number | string) {
//     //making some api calls
//     console.log(`DB id is:${id}`);
// }
// getDbId(3)
// getDbId("3")
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
}
//array
var data = [1, 2, 3, 4];
var data1 = ["1", "2", "3", "4"];
var data2 = ["1", "2", "3", "4", 5, true];
var pi = 3.14;
var seatAllotment;
seatAllotment = "aisle";
//seatAllotment="crew"
