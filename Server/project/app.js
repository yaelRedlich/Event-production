const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const producerRoutes = require('./routes/producerRoutes');
const eventRoutes = require('./routes/eventRoutes');

app.use(express.json());

app.use('/producers', producerRoutes);
app.use('/events', eventRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
