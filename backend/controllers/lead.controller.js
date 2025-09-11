module.exports.getLead = async (req, res) => {
    res.send("this is get lead route")
}

module.exports.deleteLead = async (req, res) => {
    res.send("this is lead delete route")
}

module.exports.updateLead = async (req, res) => {
    res.send("this is lead update route")
}

module.exports.addLead = async (req,res)=>{
    res.send("new lead added");
}