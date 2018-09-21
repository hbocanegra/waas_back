import { Connection } from 'mongoose';

import { ClienteSchema } from './clientes.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const clientesProviders = [
    {
        provide: POST_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Cliente', ClienteSchema),
        inject: [DB_PROVIDER],
    },
];