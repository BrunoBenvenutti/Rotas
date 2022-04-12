const controllerPantanal = require('../controllers/PantanalControllers.js')


app.get('/americaDoSul/PantanalMenu', controllerPantanal.PantanalControllers)

app.get('/americaDoSul/PantanalHidrografia', controllerPantanal.HidrografiaControllers)

app.get('/americaDoSul/PantanalClima', controllerPantanal.PantanalClimaControllers)





