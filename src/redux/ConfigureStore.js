import { createStore} from 'redux';
import { Admin } from './AdminUser';

export const ConfigureStore = () => {
    const store = createStore(
        Admin:Admin
    );
    return store;
}