import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import envConfig from './app/config';

const port = envConfig?.port;
const dbURI = envConfig?.database_url as string;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let server: Server;
async function connectDB() {
  try {
    await mongoose.connect(dbURI, {
      serverSelectionTimeoutMS: 5000,
    });

    server = app.listen(port, () => {
      console.log(`app is listening port: http://127.0.0.1:${port}/`);
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
}
connectDB();
