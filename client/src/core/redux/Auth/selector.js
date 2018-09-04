import { STATE_KEY as AUTH_STATE_KEY } from './reducer';

export const isConnected = state => !!state[AUTH_STATE_KEY].jwt;
