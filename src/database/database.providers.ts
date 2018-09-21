import * as mongoose from 'mongoose';
import { DB_PROVIDER } from '../constants';

export const databaseProviders = [
    {
        provide: DB_PROVIDER,
        useFactory: async (): Promise<typeof mongoose> =>
            await mongoose.connect('mongodb://localhost:27017/waas', { useNewUrlParser: true }),
    },
];