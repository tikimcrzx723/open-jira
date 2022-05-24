import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconecting
 */

const mongooConection = {
  isConnected: 0,
};

export const connect = async () => {
  if (mongooConection.isConnected) {
    console.log('Estamos Conectados');
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooConection.isConnected = mongoose.connections[0].readyState;

    if (mongooConection.isConnected === 1) {
      console.log('Usando conexión anterior');

      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || '');
  mongooConection.isConnected = 1;
  console.log('Conectando a MongoDB:', process.env.MONGO_URL);
};

export const disconnect = async () => {
  if (process.env.NODE_ENV === 'development') return;
  
  if (mongooConection.isConnected === 0) return;

  await mongoose.disconnect();
  console.log('Desconectado de MongoDB');
};
