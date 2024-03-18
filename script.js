async function Cadastrar(){
    let tituloLivroInput = document.getElementById("formulario__titulo");
    let descricaoLivroInput = document.getElementById("formulario__descricao");
    let formularioResultado = document.getElementById("formulario_resultado");

    let tituloLivro = tituloLivroInput.value;
    let descricaoLivro = descricaoLivroInput.value;

    if (!tituloLivro || !descricaoLivro)
    {
        formularioResultado.innerText="Formulário Inválido.";
    }
    else
    {
        const url = "https://api-aula.up.railway.app/livros";
        const retorno = await cadastrarLivroAPI(url,)
        formularioResultado.innerText="Enviado com Sucesso!";
    }
}

async function cadastrarLivroAPI(url, body){
    const respostaApi = await fetch(url,{
        method: "POST",
        body: JSON.stringfy(body),
        headers: {"Content-type": "application/json"}
    })

    const respostaApiJson = await respostaApi.json();
    return respostaApiJson;
}