const  {sequelize}  = require('../DB_connection.js')
const saveApiData = require('../controllers/saveApiData.js')
const app = require('./app')

//app.listen(3001);
sequelize.sync({force : true}).then(async () => {
    await saveApiData();
    app.listen(3001);

})