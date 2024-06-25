const User = {
    name: "ashish",
    email: "ashish@gmail.com",
    isActive: true,
}

function createUser2({ name: string, isPaid: boolean }) { }

let newUser = { name: "ashish", isPaid: false, email: "h@.com" }

createUser2(newUser)


function createCourse(): { name: string, price: number } {
    return { name: "react", price: 250 }
}



type User1 = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser1(user: User1): User1 {
    return { name: "", email: "", isActive: false }
}
createUser1({ name: "", email: "", isActive: false })


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "a",
    email: "a@gmail.com",
    isActive: false,
}

type cardNumber = {
    cardNumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.email = "aa@gmail.com"
//myUser._id="123"

export { }