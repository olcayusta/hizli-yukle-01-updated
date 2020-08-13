import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT!, 10),

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET,

  /**
   * Db user
   */
  dbUser: process.env.DB_USER,

  /**
   * Db name
   */
  dbName: process.env.DB_NAME,

  /**
   * Db password
   */
  dbPassword: process.env.DB_PASS,

  /**
   * Db port
   */
  dbPort: parseInt(process.env.DB_PORT!, 10),

  /**
   * Google Cloud Storage Bucket
   */
  gcloudStorageBucket: process.env.GCLOUD_STORAGE_BUCKET
};
