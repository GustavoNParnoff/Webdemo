
//argumento de validação
//let pedido = false;

//cria um objeto que recebe argumentos
//const promessa = new Promise((resolve, reject) => {
    //faz a validação
 //   if (pedido) {
 //       return resolve('Pedido feito!')
 //   } else {
//        return reject('Pedido negado!')
//    }
//})

//console.log('Aguardando')
//chama a função promessa "then" quando é verdadeiro. "catch" quando da erro. "finally" confirma que a execução da cunção acabou
//promessa.then(result => console.log(result)).catch(erro => console.log(erro)).finally(() => console.log('Funcao finalizada'))

import axios from 'axios'

async function start(){
    try{
        const user = await axios.get("https://api.github.com/users/GustavoNParnoff");
        const repos = await axios.get(user.data.repos_url);
        console.log(repos);
    }catch(err){
        console.log(err)
    }
}

start();