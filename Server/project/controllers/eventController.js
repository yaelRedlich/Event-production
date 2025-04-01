const  {getAllEvents,getEvenByEmail,createEvent,updateEvent,deleteEventByID} =require('../db');

exports.getEvent = async (req, res) => {
    const event = await getAllEvents();
    console.log(event);
    if (!event) return res.status(404).send('event not found');
    res.json(event);
};

exports.getEventById = async (req, res) => {
    const event = await getEvenByEmail(req.params.id);
    console.log(event);
    if (!event) return res.status(404).send('Event not found');
    res.json(event);
};

exports.createEvent = async (req, res) => {
    const list = await getAllEvents();
     const  maxId = Math.max(...list.map(item => item.id));
    const newEvent = await req.body;
    newEvent.id = maxId+1;
    createEvent(newEvent);
    res.status(201).json(newEvent);
};

exports.updateEvent = async (req,res)=>{
    const newEvent = await req.body;
    updateEvent(newEvent);
    console.log("updateEvent");
    res.status(201).json(newEvent);
}
exports.deleteEvent = async (req, res) => {
    
   console.log("deleteEvent");
    
    try {
        const id = await req.params.id;
        const deletedEvent = await deleteEventByID(id);
        if (!deletedEvent) {
            return res.status(404).json({ error: "Event not found" });
        }

        res.json({ message: "Event deleted successfully", deletedEvent });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

