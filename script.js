const URL_API = "https://script.google.com/macros/s/AKfycbyOMndTED6B5cx0mRIq4fG3Ju4pN2bbwOPEes5JpIvy1Ue2ZPtIUKc9DN5eq3cvzYY/exec";
document.getElementById("btn").onclick = async () => {
  const btn = document.getElementById("btn");
  btn.disabled = true;
  btn.innerText = "Carregando...";

  try {
    const res = await fetch(URL_API);
    const data = await res.json();

    if (data.status === "empty") {
      alert("Todos os participantes já foram sorteados!");
      return;
    }

    document.getElementById("nome").innerText = data.nome;
    document.getElementById("cep").innerText = data.cep;
    document.getElementById("endereco").innerText = data.endereco;

    document.getElementById("card").style.display = "block";
  } catch (err) {
    console.log(err);
    alert("Erro ao chamar a API.");
  }
};
