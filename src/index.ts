import app from './@app';
import debug from 'debug';

// debug
export const appLog = debug('app:start');

// Listen
const port = parseInt(process.env.PORT) || 3331;
app.listen(port, '0.0.0.0', () => appLog('Listening on port ' + port));
