import { Connection } from 'mongoose';

import { EmpresaSchema } from './empresas.schema';
import { POST_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const empresasProviders = [
    {
        provide: POST_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Empresa', EmpresaSchema),
        inject: [DB_PROVIDER],
    },
];