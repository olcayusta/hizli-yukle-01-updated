import app from './app';
import config from './config/config';

const PORT = config.port;
app.listen(PORT, (err) => {
  if (err) {
    process.exit(1);
  }
  console.log(`Server listening on port: ${PORT}`)
});
