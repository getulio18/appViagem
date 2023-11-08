const adicionaItem = document.getElementById('adicionaItem')
const lista = document.querySelector('.lista')
const categoria = document.getElementById('adicionaCategoria')
const aumentar = document.getElementsByClassName('aumentar')
const enviar = document.getElementsByClassName('enviar')
const storage = JSON.parse(localStorage.getItem('storage')) || []
var pro = document.getElementById("categoria");


//lendo json da pasta itens.json criada 
fetch('./itens.json')
    .then((res) => res.json())
    .then((json) => {
        //console.log(json.produto2)
        usarJson(json)
       
    })

//usando produtos 
function usarJson(json) {
    var li = document.createElement("option");
    li.appendChild(document.createTextNode(json.tipo1));
    var li2 = document.createElement("option");
    li2.appendChild(document.createTextNode(json.tipo2));
    var li3 = document.createElement("option");
    li3.appendChild(document.createTextNode(json.tipo3));
    var li4 = document.createElement("option");
    li4.appendChild(document.createTextNode(json.tipo4));
    pro.appendChild(li);
    pro.appendChild(li2);
    pro.appendChild(li3);
    pro.appendChild(li4);
}
pro.addEventListener('click', () => { usarJson() });
//

storage.forEach((element) => {
    inserir(element.nome, element.quantidade, element.categoria)
})

categoria.addEventListener('submit', (e) => {
    e.preventDefault()

    alert("clicado")
})



adicionaItem.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = e.target.elements['nome']
    const quantidade = e.target.elements['quantidade']
    const categoria = e.target.elements['categoria']

    console.log(e)

    //validaçao
    if(nome.value == "" ||quantidade.value == "" || categoria.value == ""){
        alert("digite")
    }
    //
    const string = {
        "nome": nome.value,
        "quantidade": quantidade.value,
        "categoria": categoria.value
    }

    storage.push(string)

    localStorage.setItem("storage", JSON.stringify(storage))

    //usar dados do localstorage
    const dadosLocal = localStorage.getItem('storage')
    const transf = JSON.parse(dadosLocal)
   //
    inserir(string.nome, string.quantidade, string.categoria)

    nome.value = "", quantidade.value = "", categoria.value = ""
    console.log(transf)
})


function inserir(nome, quantidade, categoria) {
    const criaTr = document.createElement('tr')
    const namezin = document.createElement('td')
    const numzin = document.createElement('td')
    const cat = document.createElement('td')
    const deleta = document.createElement('button')
    deleta.innerHTML = "X"
    deleta.id='2'
    //add id
   
    deleta.addEventListener('click', (e) => {
        console.log(this.storage)
    })

    //add funçao apagar tela
    deleta.addEventListener('click',(event)=>{
        var elementoClicado = event.target;
        var linha = elementoClicado.parentNode;
        localStorage.removeItem(linha)
        linha.remove()
        console.log(event.target.id)
        //localStorage.removeItem("storage");
        
    })
    cat.innerHTML = categoria
    numzin.innerHTML = quantidade
    namezin.innerHTML = nome

    criaTr.appendChild(namezin)
    criaTr.appendChild(numzin)
    criaTr.appendChild(cat)
    criaTr.appendChild(deleta)
    lista.appendChild(criaTr)
}
