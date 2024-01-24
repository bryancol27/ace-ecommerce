const save_local_storage = (key, object) => {
    return localStorage.setItem(key, JSON.stringify(object));
};

const get_local_storage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

const remove_local_storage = (key) => {
    return localStorage.removeItem(key);
};

export { save_local_storage, get_local_storage, remove_local_storage };
