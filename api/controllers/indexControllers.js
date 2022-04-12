module.exports = {
    index
}

function index(req, res) {
    res.render('index.ejs', {
        title: 'Regiõs do Planeta',
        mensagem: 'Iniciando com NodeJS - Express - EJS',
        titulo: 'Mapa Mundo',
        autor: 'Bruno Benvenutti Castro'
    })
    
}

