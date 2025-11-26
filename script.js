const URL_API = "https://script.google.com/macros/s/AKfycbyIIr6IDqytpyZHztW7f7JnzxC2NQnlfvVN57648ShbqYT9Egj-mlJ_aB302yV513dJ/exec";

document.getElementById("btn").onclick = async () => {
  const nomeInformado = prompt("Digite APENAS o seu primeiro nome:");

  if (!nomeInformado || nomeInformado.trim() === "") {
    alert("Você precisa informar seu nome!");
    return;
  }

  const btn = document.getElementById("btn");
  btn.disabled = true;
  btn.innerText = "Carregando...";

  try {
    const res = await fetch(`${URL_API}?nome=${encodeURIComponent(nomeInformado)}`);
    const data = await res.json();

    if (data.status === "ja_sorteou") {
      alert("Você já fez seu sorteio!");
    } 
    else if (data.status === "ok") {
      document.getElementById("nome").innerText = data.sorteado;
      document.getElementById("card").style.display = "block";
    } 
    else {
      alert(data.message || "Erro inesperado.");
    }

  } catch (err) {
    console.log(err);
    alert("Erro ao chamar API.");
  }

  btn.disabled = false;
  btn.innerText = "Descobrir Amigo Secreto";
};
