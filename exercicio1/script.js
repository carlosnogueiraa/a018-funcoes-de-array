const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const caixaAlta = (objeto) => {
    let novoObjeto = {
        ...objeto,
        nome: objeto.nome.toUpperCase(),
        profissao: objeto.profissao.toUpperCase(),
        username: objeto.username.toUpperCase(),
        senha: objeto.senha.toUpperCase() 
    }
    return novoObjeto
}

const textoCorrido = (objeto) => {
    let mensagem = `${objeto.nome} ${objeto.profissao} ${objeto.username} ${objeto.senha}`
    return mensagem
}

const imprimir = (objeto, callback) => {
    console.log(callback(objeto)) 
}

imprimir(objeto,caixaAlta) 
imprimir(objeto, textoCorrido)
