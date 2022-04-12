module.exports = {
    menuAmericaControllers,
    menuAmericaAmericaDoNorteControllers,
    menuAmericaAmericaDoSulControllers,
}

function menuAmericaControllers(req, res) {
    res.render('america/frm_americaMenu.ejs', {
        title: 'América',
        titulo: 'América',
        autor: 'Bruno Benvenutti Castro'
    })
    
}

function menuAmericaAmericaDoNorteControllers(req, res) {
    res.render('america/frm_americaAmericaDoNorteMenu.ejs', {
        title: 'América do Norte',
        titulo: 'América do Norte',
        autor: 'Bruno Benvenutti Castro'
    })
    
}

function menuAmericaAmericaDoSulControllers(req, res) {
    res.render('america/frm_americaAmericaDoSulMenu.ejs', {
        title: 'América do Sul',
        titulo: 'América do Sul',
        autor: 'Bruno Benvenutti Castro'
    })
    
}




