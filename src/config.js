const env = process.env.REACT_APP_ENV || 'development';

let config = {
  API_URL: 'http://dev.api.cebroker.com/v2',
  LAUNCHPAD_URL: 'http://dev.launchpad.cebroker.com',
  APP_NAME: 'LICENSEE'
};

// Override settings according to the enviroment
switch (env) {
  case 'test':
    config.LAUNCHPAD_URL = 'http://test.launchpad.cebroker.com';
    config.API_URL = 'http://test.api.cebroker.com/v2';
    break;
  case 'demo':
    config.LAUNCHPAD_URL = 'http://demo.launchpad.cebroker.com';
    config.API_URL = 'http://demo.api.cebroker.com/v2';
    break;
  case 'production':
    config.LAUNCHPAD_URL = 'http://launchpad.cebroker.com';
    config.API_URL = 'http://api.cebroker.com/v2';
    break;
  default:
}
