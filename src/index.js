import config from 'config';
import app from './app';

const port = config.get('server.port');

app.listen(port, () => console.log(`app listening on port ${port}`));
