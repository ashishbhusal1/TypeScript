//const user: (string | number)[] = [1,'ab']
let tUser: [string, number, boolean]
tUser = ["ashish", 11, true]

let rgb: [number, number, number] = [255, 123, 112]

type TUser = [number, string]
const newUser: TUser = [112, "ashish"]

newUser[1]="ashish1"
//newUser.push(true)

export{}