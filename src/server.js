import './lib/dotenv';
import App from './App';

const port = process.env.PORT || process.env.APP_PORT;
const URL = `${process.env.APP_URL}:${port}${process.env.SUBDIRECTORY}`;
const appName = process.env.APP_NAME;

App.set('port', port);

App.listen(port, () => {
  console.log(`${appName} is running on ${URL}`);
});
