import app from './app';
import config from './config/config';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.listen(config.port, (err) => {
    if (err) {
        console.log(err);
    }

    console.info('Server started on port %s.', config.port);
});