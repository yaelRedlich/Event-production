
const  {getProducerByEmail,createProducer,updateProducer} =require('../db');
 exports.getProducer = async (req, res) => {
    const producer = await getProducerByEmail(req.params.email);
    console.log(producer);
    if (!producer) return res.status(404).send('Producer not found');
    res.json(producer);
};

exports.createProducer = async (req, res) => {
    const newProducer = await req.body;
    createProducer(newProducer);
    res.status(201).json(newProducer);
}

exports.updateProducer = async (req, res) => {
    const newProducer = await req.body;
    console.log("reyrt");
    
    updateProducer(newProducer);
    res.status(201).json(newProducer);
};
