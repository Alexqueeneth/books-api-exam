import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('PG_URI') 
 
export const connectToDatabase = async () => {
 try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

};