var dadosMembros = `[{
    "nome": "Leonardo",
    "email": "leonardo@teste.com",
    "senha": "123456"
    },{
    "nome": "Adriano",
    "email": "adriano@teste.com",
    "senha": "teste123"
    },{
    "nome": "Edson",
    "email": "edson@teste.com",
    "senha": "123teste"
    },{
    "nome": "Robinson",
    "email": "robinson@teste.com",
    "senha": "teste1234"
    },{
    "nome": "João",
    "email": "joao@teste.com",
    "senha": "1234teste"
    }]`;

document.getElementById('realizarLogin').addEventListener('click', loginUsuario);

var cadastroMembros = JSON.parse(dadosMembros);
console.log(cadastroMembros);

function loginUsuario() {
    var verificaEmail = document.getElementById('loginUsuario').value;
    var verificaSenha = document.getElementById('senhaUsuario').value;

    for (let index = 0; index < cadastroMembros.length; index++) {
        if (cadastroMembros[index].email == verificaEmail) {
            if (cadastroMembros[index].senha == verificaSenha) {
                window.location.href = 'home.html';
                break;
            } else {
                alert('Dados informados não foram encontrados!')
            }
        }
    }
}