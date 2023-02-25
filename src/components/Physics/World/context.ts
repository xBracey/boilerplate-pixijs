import { createContext } from 'react';
import Bump from 'bump-ts';

export const WorldContext = createContext({ world: Bump.newWorld(64), gravity: 1 });
