import GasStation from "./model";


const gasStationKeepingControler = {
    get: async (req, res) => {
        try {
            
            const result = await GasStation.find({}).lean()
            let A80 = 0;
            let A92 = 0;
            let A95 = 0;
            result.forEach(element => {
                if (element.firm_owner == req.query.f) {
                    A80 += element.rest_A80 * 1;
                    A92 += element.rest_A92 * 1;
                    A95 += element.rest_A95 * 1;
                }
            });
            var ress = "A80 - " + A80.toString() + ", A92 - " + A92.toString() + ", A95 - " + A95.toString();
            if (req.query.f) {
                res.send(ress)
            }
            res.send(result);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    getById: async (req, res) =>{
        try {
            const gasStation = await GasStation.findById(req.params.id);
            if (gasStation) 
                res.send(gasStation);
            else
                res.status(404).send("Not Found");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    delete: async (req, res) =>{
        try {
            const gasStation = await GasStation.findByIdAndDelete(req.params.id);
            if (gasStation) 
                res.send(gasStation);
            else
                res.status(404).send("Not Found");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    post: async (req, res) =>{
        try {
            let newGasStation;
            let gasStation;
            if (Array.isArray(req.body)) {
                req.body.forEach(async element=>{
                    newGasStation = new GasStation(element);
                    gasStation = await newGasStation.save();
                })
            }
            else {
                newGasStation = new GasStation(req.body);
                gasStation = await newGasStation.save(); 
            }
          
            res.send("Fine :)");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    patch: async (req, res) =>{
        try {
            const gasStation = await GasStation.findOneAndUpdate(req.params.id, req.body, {
                returnOriginal: false
            } );
            if (gasStation) 
                res.send(gasStation);
            else
                res.status(404).send("Not Found");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    }
}

export default gasStationKeepingControler;