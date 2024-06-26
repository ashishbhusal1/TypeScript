interface IUser {
    readonly dbId: number
    email: string
    userId: number
    gooleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface IUser {
    githubToken: string
}
interface IAdmin extends IUser {
    role: "admin" | "ta" | "learner"
}

const auser: IAdmin = {
    dbId: 22, email: "a@gmail.com", userId: 122,
    githubToken: "github",
    startTrail: () => {
        return "trial started"
    },
    getCoupon: (name: "ashish", off: 10) => {
        return 10
    },
    role: "admin"
}
auser.email = "a@ab.com"
//auser.dbId=22