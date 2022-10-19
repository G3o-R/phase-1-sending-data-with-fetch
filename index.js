// Add your code here
const sendData = {
name: "Gerardo Rapeta",
mail: "madeupemail@gmail.com"
};

const submitData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({name: "bob"}),
    
};


fetch("http://localhost:3000/users", submitData)
.then((res)=>{
        return res.json()
    })
.then((obj)=> console.log(obj))

    
