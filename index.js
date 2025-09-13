const express = require('express');
const app = express();
const queryRoutes = require('./Routes/queryRoutes');
const { connectDB } = require('./config/Databse');



app.use(express.json());
app.use('/api/queries', queryRoutes);

connectDB();

app.listen(8080, () => {
    console.log('Server is running on port 3000');
});