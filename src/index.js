import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Create global app object
const app = express();
const port=process.env.PORT || 5000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// finally, let's start our server...
 app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});


export default app;