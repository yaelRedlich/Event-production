const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/EventProduction');
}

const EventSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  producerID: String,
});

const ProducerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  description: String,
});

const Event = mongoose.model('Event', EventSchema);
const Producer = mongoose.model('Producer', ProducerSchema);

const event1 = new Event({
  id: "123",
  name: 'party',
  description: "abc",
  producerID: "yael@f"
});
const event2 = new Event({
  id: "124",
  name: 'party2',
  description: "abc2",
  producerID: "tamar@f"
});
const event3 = new Event({
  id: "124",
  name: 'party3',
  description: "abc6",
  producerID: "tamar@f"
});
const Producer1 = new Producer({ name: "yael", email: "yael@f", phone: "0976", description: "7878" });
const Producer2 = new Producer({ name: "tamar", email: "tamar@f", phone: "096776", description: "ytt" });
const Producer3 = new Producer({ name: "rut", email: "rut@f", phone: "0976", description: "7878" });
//   event1.save();
//   event2.save();
//   event3.save(); 
//   Producer1.save();
//   Producer2.save();
//   Producer3.save();


async function getProducerByEmail(email) {
  try {
    const producer = await Producer.findOne({ email });
    return producer;
  } catch (error) {
    return { error: 'Server error', details: error.message };
  }
}

async function createProducer(producer) {
  try {
    const _producer = new Producer({ name: producer.name, email: producer.email, phone: producer.phone, description: producer.description });
    await _producer.save();
  }
  catch {
    return { error: 'serve error' };
  }
}


async function updateProducer(producer) {
  try {
    const updatedProducer = await Producer.findOneAndUpdate(
      { email: producer.email },
      { $set: producer },
      { new: true, runValidators: true });
  }
  catch (error) {
    return { message: 'Error updating producer', error: error.message };
  }
}

async function getAllEvents() {
  try {
    const event = await Event.find();
      return event;
  } catch (error) {
    return ({ message: 'Error retrieving event', error });
  }
}

async function getEvenByEmail(id) {
  try {
    const event = await Event.findOne({ id });
    return event;
  } catch (error) {
    return { error: 'Server error', details: error.message };
  }
}

async function createEvent(event) {
  try {
    const _event = new Event({ id: event.id, name: event.name,description: event.description,producerID: event.producerID });
    await _event.save();
  }
  catch {
    return { error: 'serve error' };
  }
}

async function updateEvent(event) {
  try {
    const updatedEvent = await Event.findOneAndUpdate(
      { email: event.email },
      { $set: event },
      { new: true, runValidators: true });
  }
  
  catch (error) {
    return { message: 'Error updating event', error: error.message };
  }
}

async function deleteEvent(id) {
  try {
    const event = await Event.findByIdAndDelete(id);
    if (!event) {
        return { message: 'event not found' };
    }
} catch (error) {
  return { message: 'Error deleting producer', error };
}
} 

async function deleteEventByID(id) {
  try {
      const query = mongoose.isValidObjectId(id)
          ? { _id: new mongoose.Types.ObjectId(id) }
          : { id: id };

      const deletedEvent = await Event.findOneAndDelete(query);
      return deletedEvent;
  } catch (error) {
      return { error: 'Server error', details: error.message };
  }
}

// async function getAllEventByProducerId (producerID){
//   try {
//     const event = await Event.find({ producerID });
//     return event;
//   } catch (error) {
//     return { error: 'Server error', details: error.message };
//   }
// }
module.exports = { getProducerByEmail, createProducer, updateProducer, getAllEvents ,getEvenByEmail,createEvent,updateEvent,deleteEventByID };

