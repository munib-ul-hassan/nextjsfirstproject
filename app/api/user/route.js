// const express = require("exprss")
// const app = express()
// app.get("/api/users", (req, res) => {
//     try {
//         const user = [
//             { name: "A" }, { name: "B" }, { name: "C" }
//         ]
//         res.json(user)
//     } catch (err) {


//     }
// })

// app.listen(3000, () => {
//     console.log("Server is running on port 3000")
// })

// api-endpoint --> http://localhost:3000/api/user
// youtube link=> https://www.youtube.com/watch?v=wm5gMKuwSYk&list=WL&index=51&t=19s
export async function GET(request){
    const user = [
                    { name: "A" }, { name: "B" }, { name: "C" }
                ]
    return new Response(JSON.stringify(user))
}

export async function POST(request){
    return new Response()
}

export async function PUT(request){
    return new Response()
}

export async function DELETE(request){
    return new Response()
}

export async function PATCH(request){
    return new Response()
}
