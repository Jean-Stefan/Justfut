// Página inicial de Login
const LOGIN_URL = "login.html";

// Objeto para o banco de dados de usuários baseado em JSON
let db_usuario = {};

let usuariosJSON = localStorage.getItem('db_usuario');

db_usuario = JSON.parse(usuariosJSON);

// Objeto para o usuário corrente
let usuarioCorrente = {};


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

        // Declara uma função para processar o formulário de login
        function processaFormLogin (event) {                
            // Cancela a submissão do formulário para tratar sem fazer refresh da tela
            event.preventDefault ();

            // Obtem os dados de login e senha a partir do formulário de login
            let username = document.getElementById('usuario').value;
            let password = document.getElementById('senha').value;

            // Valida login e se estiver ok, redireciona para tela inicial da aplicação
            resultadoLogin = loginUser (username, password);
            if (resultadoLogin) {
                window.location.href = 'home-com-sidebar.html';
            }
            else { // Se login falhou, avisa ao usuário
                alert ('Usuário ou senha incorretos');
            }
    }

    // Associa a funçao processaFormLogin  formulário adicionado um manipulador do evento submit
    document.getElementById ('formulario').addEventListener('submit', processaFormLogin);
