import {
    ref
} from "vue";

import {
    auth
} from '../firebase/config';

let error = ref(null);
let logout = async () => {
    try {
        await auth.signOut();
        console.log('User logout');
    } catch (err) {
        error.value = err.message;
        console.log(err.value);
    }
};
let useLogout = () => {
    return {
        logout,
        error
    }
}

export default useLogout;