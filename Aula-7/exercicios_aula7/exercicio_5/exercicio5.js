// Função que recebe um ID numérico e retorna uma promessa com o objeto do usuário
function obterUsuarioPorId(id) {
    return new Promise((resolve) => {
        const usuario = {
            id,
            nome: `Usuário ${id}`,
            email: `usuario${id}@email.com`,
        };
        resolve(usuario);
    });
}

// Função async que mapeia um array de IDs para seus respectivos objetos de usuário
async function mapearUsuarios(ids) {
    const usuarios = [];
    for (const id of ids) {
        const usuario = await obterUsuarioPorId(id);
        usuarios.push(usuario);
    }
    return usuarios;
}

// Teste da função
(async () => {
    const ids = [1, 2, 3, 4, 5]; // Exemplo de array de IDs
    const resultado = await mapearUsuarios(ids);
    console.log(resultado);
})();
