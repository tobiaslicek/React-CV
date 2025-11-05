import { createContext } from 'react';
import type { AppData } from '../types';

type Ctx = { appData: AppData | null };

const AppDataContext = createContext<Ctx>({ appData: null });
export default AppDataContext;
