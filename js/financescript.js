let lista = document.getElementById("form_listagem")
lista.addEventListener("submit", function(event)
{
    event.preventDefault(); //Impede o comportamento natural de buscar uma riquisição Back-End/SGBD.
    let name = document.getElementById("name").value;
    let receita = document.getElementById("receita").value;
    let despesas = document.getElementById("despesas").value;
    let descricao = document.getElementById("descricao").value; //"Value" pois queremos o valor do respectivo ID.
    let data = document.getElementById("data").value;
    usuario = {
        nome: name, receita: receita, despesas: despesas, descricao: descricao, data: data
    } //Objeto.
    let lista_usuarios = JSON.parse(localStorage.getItem("lista_usuarios")) || []
    lista_usuarios.push(usuario)
    localStorage.setItem("lista_usuarios", JSON.stringify(lista_usuarios)) //JSON.stringfy realiza a conversão para String.
    document.getElementById("form_listagem").reset()
    exibir_lista01()
    exibir_lista02()
}
)
    function exibir_lista01(){
    let lista_usuarios = JSON.parse(localStorage.getItem("lista_usuarios")) || [];
    let full = document.getElementById("full")
    full.innerHTML=" ";
    for(let i = 0;i<lista_usuarios.length;i++)
    {
        let tr = document.createElement("tr")
         
        let tdName = document.createElement("td")
        tdName.textContent = lista_usuarios[i].name
        tr.appendChild(tdName)

        let tdReceita = document.createElement("td")
        tdReceita.textContent = lista_usuarios[i].receita
        tr.appendChild(tdReceita)

        let tdDespesas = document.createElement("td")
        tdDespesas.textContent = lista_usuarios[i].despesas
        tr.appendChild(tdDespesas)

        let tdDescricao = document.createElement("td")
        tdDescricao.textContent = lista_usuarios[i].descricao
        tr.appendChild(tdDescricao)

        let tdData = document.createElement("td")
        tdData.textContent = lista_usuarios[i].data
        tr.appendChild(tdData)
           
        full.appendChild(tr);
    }
    }
    function exibir_lista02(){
    let lista_usuarios = JSON.parse(localStorage.getItem("lista_usuarios")) || [];
    let expenses = document.getElementById("expenses")
    expenses.innerHTML = "";
    for(let i = 0;i<lista_usuarios.length;i++)
    {
        let tr = document.createElement("tr")

        let tdDespesas = document.createElement("td")
        tdDespesas.textContent = lista_usuarios[i].despesas
        tr.appendChild(tdDespesas)

        let tdDescricao = document.createElement("td")
        tdDescricao.textContent = lista_usuarios[i].descricao
        tr.appendChild(tdDescricao)

        let tdData = document.createElement("td")
        tdData.textContent = lista_usuarios[i].data
        tr.appendChild(tdData)
           
            expenses.appendChild(tr);
        }
        }
//Quando eu clicar no botão listar...quero que as listas se tornem visiveis.
//Uma lista geral, com todos os dados.
//Uma lista de gastos com as respectivas descrições e a data.
//O total de despesas.