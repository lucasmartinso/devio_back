import dotenv from 'dotenv';
import app from "./index.js"
dotenv.config();

const PORT = Number(process.env.PORT) || 4200;

app.listen(PORT, () => {
  console.log(`\nListening server on port: ${PORT}`);
});