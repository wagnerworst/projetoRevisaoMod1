async function Cadastrar(){
    limparTela();

    let tituloLivro = pegarValorElementoHtml("formulario__titulo");
    let descricaoLivro = pegarValorElementoHtml("formulario__descricao");

    if (!tituloLivro || !descricaoLivro)
    {
        formularioResultadoErro.style.display = "block";
        return
    }
    else
    {
        await cadastrarLivroAPI(tituloLivro,descricaoLivro)
    }
}

async function cadastrarLivroAPI(tituloLivro, descricaoLivro){
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
        const retorno = await fetch(url,fetchOptions);
        //a response do feth precisa ser transformada em JSON pra podermos utilizar e ver o dado como obj JS.
        const data = await Response.json();
        //altera o css da div de sucesso e esconde a de erro
        formularioResultadoSucesso.style.display = "block";
}

function limparTela()
{
    const formularioResultadoSucesso = document.getElementById("formularioResultado_sucesso");
    const formularioResultadoErro = document.getElementById("formularioResultado_erro");

    formularioResultadoSucesso.style.display = "none";
    formularioResultadoErro.style.display = "none";
}

function pegarValorElementoHtml(idElemento){
    const elemento = document.getElementById(idElemento);
    return elemento.value;
}

async function exibirLivros(){ 
    var response = await buscarLivrosApi()
    const livros = await response.json();

    await mostrarLivrosTela(livros);
}

async function buscarLivrosApi(){
    return fetch("https://api-aula.up.railway.app/livros");
}

function mostrarLivrosTela(livrosJson){

    const listagemLivros = document.getElementById("listagem_resultado");

    let livrosConcatenados = "";
    livrosJson.forEach(livros => {
        livrosConcatenados += `
            <div   class="livros">
                <p>Título: ${livros.title}</p> 
                <p>Descrição: ${livros.description}</p> 
            </div>
        `
    });

    listagemLivros.innerHTML = livrosConcatenados;
}