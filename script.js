var cadastroMembros = [
    {
        email: 'leotrierveiler65@gmail.com',
        senha: '123456'
    }
];

document.getElementById('cadastrarLogin').addEventListener('click', cadastrarUsuario);
document.getElementById('realizarLogin').addEventListener('click', loginUsuario);

var verificaEmail;
var verificaSenha;

function cadastrarUsuario() {

    var membrosDados = {
        email: document.getElementById('loginUsuario').value,
        senha: document.getElementById('senhaUsuario').value
    }

    verificaEmail = document.getElementById('loginUsuario').value;

    for (let index = 0; index < cadastroMembros.length; index++) {
        if (cadastroMembros[index].email == verificaEmail) {
            alert('Cadastro já realizado!');
            break;
        } else {
            cadastroMembros.push(membrosDados);
            console.log(cadastroMembros);
            break;
        }
    }
}

function loginUsuario() {
    var cadastroMembrosJson = JSON.stringify(cadastroMembros);
    console.log(cadastroMembrosJson);
    cadastroMembros = JSON.parse(cadastroMembrosJson);

    verificaEmail = document.getElementById('loginUsuario').value;
    verificaSenha = document.getElementById('senhaUsuario').value;

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
