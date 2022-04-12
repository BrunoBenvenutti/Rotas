const controllerAmerica = require('../controllers/americaControllers.js')

app.get('/america/americaMenu', controllerAmerica.menuAmericaControllers)

app.get('/america/americaAmericaDoNorteMenu', controllerAmerica.menuAmericaAmericaDoNorteControllers)

app.get('/america/americaAmericaDoSulMenu', controllerAmerica.menuAmericaAmericaDoSulControllers)






