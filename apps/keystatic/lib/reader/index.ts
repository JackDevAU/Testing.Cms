import { gitReader } from './git-reader';
import {localReader} from './local-reader'


export const reader = process.env.NODE_ENV === 'production' ? gitReader : localReader;