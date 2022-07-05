var dadosMembros = `[{
    "nome": "Leonardo",
    "email": "leonardo@teste.com",
    "senha": "123456"
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