const Location = require("../model/Location")

async function getAllLocations (req,res){
    try {
        let foundLocations = await Location.find({})
        res.json({message:"success", payload:foundLocations})
    } catch (error) {
        res.status(500).json({message:"error", error:error.message})
    }
}

async function addLocation (req,res){
    try {
        let newLocation = new Location({
            location:req.body.location
        })
        let savedLocation = await newLocation.save()
        res.json({message:"success", payload:savedLocation})
    } catch (error) {
        res.status(500).json({message:"error", error:error.message})
    }
}

async function deleteLocation (req,res){
    try {
        let deletedLocation = await Location.findByIdAndDelete(req.params.id)
        res.json({message:"success", payload:deletedLocation})
    } catch (error) {
        res.status(500).json({message:"error", error:error.message})
    }
}

module.exports = {
    getAllLocations,
    addLocation,
    deleteLocation
}