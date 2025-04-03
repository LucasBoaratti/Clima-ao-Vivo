//async function: Função assíncrona que permite o uso de await para lidar com operações assíncronas tipo requisições a APIs
async function clima() {
    const cidade = document.getElementById("cidade").value; //Pegando o nome da cidade digitado pelo usuário 
    //ATENÇÃO: Você deve criar uma conta na OpenWeatherMap e pegar a sua própria chave. Link do site: https://openweathermap.org
    const chaveAPI = "8a1daad407a1f82419fb410b9ecb59af"; //Definindo a chave da api
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveAPI}&units=metric&lang=pt_br`; //URL que será usada para buscar os dados do clima

    try { //Tentativa de executar o código com sucesso
        const response = await fetch(url); //Realizando a requisição HTTP para a API selecionada, usando fetch()
        const data = await response.json(); //Transformando a resposta da API para um JSON

        document.getElementById("nomeCidade").textContent = `Clima em ${data.name}`; //Mostrando o nome da cidade a partir do caminho do JSON criado (data)
        document.getElementById("temperatura").textContent = `Temperatura: ${data.main.temp}°C`; //Mostrando a temperatura da cidade a partir do caminho do JSON criado (data)
        document.getElementById("descricao").textContent = `Descrição: ${data.weather[0].description}`; //Mostrando a descrição do clima a partir do caminho do JSON criado (data)
    }
    catch (error) { //Caso algum erro ocorra dentro do bloco try
        window.alert("Cidade não encontrada.") //Exibindo um popup de aviso de cidade não encontrada
    }
}