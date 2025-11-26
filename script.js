const URL_API = "https://script.google.com/macros/s/AKfycbzYX5IY1Na4Nu2ILduC0cdJzi_jDF64E4W2VqKzqC_WNpHu1pNqCFsDDXMmgMIrkuKV/exec";



document.getElementById("btn").onclick = async () => {
  const nomeInformado = prompt("Digite APENAS o seu primeiro nome:");

  if (!nomeInformado || nomeInformado.trim() === "") {
    alert("Você precisa informar o nome!");
    return;
  }

  const btn = document.getElementById("btn");
  btn.disabled = true;
  btn.innerText = "Carregando...";

  try {
    const res = await fetch(`${URL_API}?nome=${encodeURIComponent(nomeInformado)}`);
    const data = await res.json();

    if (data.status === "ja_sorteou") {
      alert("Você já realizou seu sorteio!");
    }
    else if (data.status === "ok") {
      document.getElementById("nome").innerText = data.nome;
      document.getElementById("cep").innerText = data.cep;
      document.getElementById("endereco").innerText = data.endereco;
      document.getElementById("card").style.display = "block";
    }
    else {
      alert(data.message || "Erro inesperado.");
    }

  } catch (err) {
    console.error(err);
    alert("Erro ao conectar com a API.");
  }

  btn.disabled = false;
  btn.innerText = "Descobrir Amigo Secreto";
};
