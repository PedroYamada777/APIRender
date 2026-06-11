const API = "http://127.0.0.1:8000/lutadores";

const lista = document.getElementById("lista");

// 🔹 listar todos
document.getElementById("botao-listar").addEventListener("click", () => {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            lista.innerHTML = "";
            data.forEach(l => {
                lista.innerHTML += `<li>${l.nome}</li>`;
            });
        });
});

// 🔹 buscar por id ou nome
document.getElementById("botao-buscar").addEventListener("click", () => {
    const valor = document.getElementById("buscar").value;

    fetch(`${API}/${valor}`)
        .then(res => res.json())
        .then(data => {
            lista.innerHTML = `<li>${data.nome}</li>`;
        });
});

// 🔹 nacionalidade
document.getElementById("botao-nacionalidade").addEventListener("click", () => {
    const valor = document.getElementById("nacionalidade").value;

    fetch(`${API}/nacionalidade/${valor}`)
        .then(res => res.json())
        .then(data => {
            lista.innerHTML = "";
            data.forEach(l => {
                lista.innerHTML += `<li>${l.nome}</li>`;
            });
        });
});

// 🔹 estilo
document.getElementById("botao-estilo").addEventListener("click", () => {
    const valor = document.getElementById("estilo").value;

    fetch(`${API}/estilo/${valor}`)
        .then(res => res.json())
        .then(data => {
            lista.innerHTML = "";
            data.forEach(l => {
                lista.innerHTML += `<li>${l.nome}</li>`;
            });
        });
});

// 🔹 categoria
document.getElementById("botao-categoria").addEventListener("click", () => {
    const valor = document.getElementById("categoria").value;

    fetch(`${API}/categoria/${valor}`)
        .then(res => res.json())
        .then(data => {
            lista.innerHTML = "";
            data.forEach(l => {
                lista.innerHTML += `<li>${l.nome}</li>`;
            });
        });
});