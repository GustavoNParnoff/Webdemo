const url ="http://localhost:5000/api"
/*=================================FETCH============================================

function getUsers(){                                //bota a informação no id do html
    fetch(url).then(response => response.json()).then(data => renderApiResult.textContent = JSON.stringify(data)).catch(error => console.error(error))
}


function getUser(id){
    //usando parametros na url
    fetch(`${url}/${id}`).then(response => response.json()).then(data =>{
        //pega a informação do Servidor e bota no html
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    }).catch(error => console.error(error))
}

//post -> adiciona 
function addUser(newUser){
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(data => alertApi.textContent=data).catch(error => console.error(error))
}

//novo usuario
const newUser = {
    name: "Bruna",
    avatar:"https://picsum.photos/200/300",
    city: "Palhoça"
}


//put -> 
function updateUser(updatedUser, id){
    fetch(`${url}/${id}`,{
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(data => alertApi.textContent = data).catch(error => console.error(error))
}


const updatedUser = {
    name: "Bruna O.",
    avatar:"https://picsum.photos/200/300",
    city: "Blumenau"
}


//delete -> deleta
function deleteUser(id){
    fetch(`${url}/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(data => alertApi.textContent = data).catch(error => console.error(error))
}

//inicia a função
//addUser(newUser)
//updateUser(updatedUser, 3)
deleteUser(2)
getUsers()
getUser(3)
*/


function getUsers(){
    axios.get(url).then(response => {
        renderApiResult.textContent = JSON.stringify(response.data)
    }).catch(error => console.error(error))
}


//inicia a função
//addUser(newUser)
//updateUser(updatedUser, 3)
//deleteUser(2)
getUsers()
//getUser(3)