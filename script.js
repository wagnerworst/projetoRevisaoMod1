async function Cadastrar(){
    let tituloLivroInput = document.getElementById("formulario__titulo");
    let descricaoLivroInput = document.getElementById("formulario__descricao");
    let formularioResultadoSucesso = document.getElementById("formularioResultado_sucesso");
    let formularioResultadoErro = document.getElementById("formularioResultado_erro");

    let tituloLivro = tituloLivroInput.value;
    let descricaoLivro = descricaoLivroInput.value;

    if (!tituloLivro || !descricaoLivro)
    {
        formularioResultadoSucesso.style.display = "none"
        formularioResultadoErro.style.display = "block"
    }
    else
    {
        const url = "https://api-aula.up.railway.app/livros";
        const payload = {
            title: tituloLivro,
            description: descricaoLivro
        }
        //opções de como o fetch vai ser feito
        const fetchOptions = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {"Content-type": "application/json"}
        }
        //manda o fetch executar mandando a URL e suas opções
        fetch(url,fetchOptions);
        //altera o css da div de sucesso e esconde a de erro
        formularioResultadoErro.style.display = "none"
        formularioResultadoSucesso.style.display = "block"
    }
}

/*async function cadastrarLivroAPI(url, body){
    const respostaApi = await fetch(url,{
        method: "POST",
        body: JSON.stringfy(body),
        headers: {"Content-type": "application/json"}
    })

    const respostaApiJson = await respostaApi.json();
    return respostaApiJson;
}*/