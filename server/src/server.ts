import app from './app';
import config from './config/config';

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});
