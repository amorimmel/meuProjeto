// criar um projeto simplificado com algumas funções 
// que um sistema de PETSHOP também possui.
// animais, cadastrar animais (validar os dados de cadastro), vacinar animas, listar os pets, etc...

let pets = [
    {
        nome:'fulano',
        nomeDono:'Melissa',
        idade: 7,
        tipo:'cachorro',
        raca:'Vira-lata',
        vacinado: true,
    },
    {
        nome:'beltrano',
        nomeDono:'Ana',
        idade: 8,
        tipo:'gato',
        raca:'Vira-lata',
        vacinado: false,
    },
    {
        nome:'ciclano',
        nomeDono:'Joao',
        idade: 3,
        tipo:'cachorro',
        raca:'Golden',
        vacinado: true,
    }
]

// listar todos os nomes dos pets 
function listarPets(){
{
    for(let i=0; i < pets.length; i++){
        console.log('Nome: '+ pets[i].nome)
    } 
}
}
listarPets();

function cadastrarPet(arrayPets, objetoPet){
    return arrayPets.push(objetoPet)  }

    if (objetoPet == true){
        console.log('TOP')
    } else{
        console.log('Insira um objeto valido')
    }

let novoPet =   {
    nome: 'Trovão',
    nomeDono: 'Danilo',
    idade: 2,
    tipo: 'cachorro',
    raca: 'Pit bull',
    vacinado: true,
}



cadastrarPet(pets, novoPet)

function validaDados (objetoPet){
return(objetoPet.nome && objetoPet.nomeDono && objetoPet.idade && objetoPet.tipo && objetoPet.raca && objetoPet.vacinado)
}