//
// Disciplina: Trabalho Interdisciplinar - Aplicações Web
// Professor: Rommel Vieira Carneiro (rommelcarneiro@gmail.com)
//
// Código LoginApp utilizado como exemplo para alunos de primeiro período 

// Página inicial de Login
const LOGIN_URL = "login.html";

// Objeto para o banco de dados de usuários baseado em JSON
let db_usuario = {};

let usuariosJSON = localStorage.getItem('db_usuario');

db_usuario = JSON.parse(usuariosJSON);

// Objeto para o usuário corrente
let usuarioCorrente = {};

// // Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
// function initLoginApp () {
//     // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
//     usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
//     if (usuarioCorrenteJSON) {
//         usuarioCorrente = JSON.parse (usuarioCorrenteJSON);
//     }
    
//     // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
//     // Obtem a string JSON com os dados de usuários a partir do localStorage
//     var usuariosJSON = localStorage.getItem('db_usuarios');

//     // Verifica se existem dados já armazenados no localStorage
//     if (!usuariosJSON) {  // Se NÃO há dados no localStorage
        
//         // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
//         alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

//         // Copia os dados iniciais para o banco de dados 
//         db_usuarios = dadosIniciais;

//         // Salva os dados iniciais no local Storage convertendo-os para string antes
//         localStorage.setItem('db_usuarios', JSON.stringify (dadosIniciais));
//     }
//     else  {  // Se há dados no localStorage
        
//         // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
//         db_usuarios = JSON.parse(usuariosJSON);    
//     }
// };


// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser (login, senha) {
    
    // Verifica todos os itens do banco de dados de usuarios 
    // para localizar o usuário informado no formulario de login
    for (let i = 0; i < db_usuario.usuarios.length; i++) {
        let usuario = db_usuario.usuarios[i];
        
        // Se encontrou login, carrega usuário corrente e salva no Session Storage
        if (login == usuario.login && senha == usuario.senha) {

            usuarioCorrente.id = usuario.id
            usuarioCorrente.login = usuario.login
            usuarioCorrente.senha = usuario.senha
            usuarioCorrente.nome = usuario.nome
            usuarioCorrente.nascimento = usuario.nascimento
            usuarioCorrente.genero = usuario.genero
            usuarioCorrente.estado = usuario.estado
            usuarioCorrente.altura = usuario.altura
            usuarioCorrente.peso = usuario.peso
            
            // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
            sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));

            // Retorna true para usuário encontrado
            return true;
        }
    }

    // Se chegou até aqui é por que não encontrou o usuário e retorna falso
    return false;
}

// // Apaga os dados do usuário corrente no sessionStorage
// function logoutUser () {
//     usuarioCorrente = {};
//     sessionStorage.setItem ('usuarioCorrente', JSON.stringify (usuarioCorrente));
//     window.location = LOGIN_URL;
// }

// function addUser (nome, login, senha, email) {
    
//     // Cria um objeto de usuario para o novo usuario 
//     let newId = generateUUID ();
//     let usuario = { "id": newId, "login": login, "senha": senha, "nome": nome, "email": email };
    
//     // Inclui o novo usuario no banco de dados baseado em JSON
//     db_usuarios.usuarios.push (usuario);

//     // Salva o novo banco de dados com o novo usuário no localStorage
//     localStorage.setItem('db_usuarios', JSON.stringify (db_usuarios));
// }

// function setUserPass () {

// }


// // Inicializa as estruturas utilizadas pelo LoginApp
// initLoginApp ();