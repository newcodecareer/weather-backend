const weatherApiService = require('../services/openWeatherServiceApi')

// get all weather
exports.index = async (req,res) => {
    const data= await weatherApiService.getWeather(); 
    res.send(data.data.list.filter((item) => {
        return item.dt_txt.includes('12:00:00');
    }));
    // TODO fake date

    // const sampleData = [
    //     {
    //       day: "Thursday",
    //       max: 20,
    //       min: 15,
    //       icon: "rain",
    //     },
    //     {
    //       day: "Thursday",
    //       max: 20,
    //       min: 15,
    //       icon: "rain",
    //     },
    //     {
    //       day: "Thursday",
    //       max: 20,
    //       min: 15,
    //       icon: "rain",
    //     },
    //     {
    //       day: "Thursday",
    //       max: 20,
    //       min: 15,
    //       icon: "rain",
    //     },
    //     {
    //       day: "Thursday",
    //       max: 20,
    //       min: 15,
    //       icon: "rain",
    //     },
    //   ];

    // res.send(sampleData)
}

//get one
exports.show =  (req,res) => {
    
}

//post
exports.store =  (req,res) => {

}

//put
exports.update =  (req,res) => {
    
}

//delete
exports.delete =  (req,res) => {
    
}