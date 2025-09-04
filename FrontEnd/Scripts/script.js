function showMessage() {
    alert("Botão clicado!");
}

async function refreshToken() {
    const refresh_token = "TG-68b9ff4f37e88a0001f3f62a-1533497939";
    const client_id = "1677739876131799";
    const client_secret = "0MQ9vxQIU6TKNmXwgRNaGF2k9wrgAN0f";

    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("content-type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "refresh_token");
    urlencoded.append("client_id", client_id);
    urlencoded.append("client_secret", client_secret);
    urlencoded.append("refresh_token", refresh_token);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow"
    };

    fetch("https://api.mercadolibre.com/oauth/token", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}
