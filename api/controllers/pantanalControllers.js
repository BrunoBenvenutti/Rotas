module.exports = {
    PantanalControllers,
    HidrografiaControllers,
    PantanalClimaControllers,
}


function PantanalControllers(req, res) {
    res.render('americaDoSul/frm_PantanalMenu.ejs', {
        title: 'Pantanal',
        titulo: 'Pantanal - Localização Geográfica',
        autor: 'Bruno Benvenutti Castro'
    })
    
}

function HidrografiaControllers(req, res) {
    res.render('americaDoSul/frm_pantanalHidrografia.ejs', {
        title: 'Pantanal Hidrografia',
        titulo: 'Pantanal - Hidrografia',
        autor: 'Bruno Benvenutti Castro'
    })
    
}

function PantanalClimaControllers(req, res) {
    res.render('americaDoSul/frm_pantanalClima.ejs', {
        title: 'Pantanal Clima',
        titulo: 'Pantanal - Clima',
        autor: 'Bruno Benvenutti Castro'
    })
    
}

