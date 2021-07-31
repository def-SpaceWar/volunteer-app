export default class LocalStorage {
    constructor(window) {
        this.window = window;
    }

    fetchItems() {
        return this.window.localStorage;
    }

    setItem(key, value) {
        this.window.localStorage.setItem(key, value);
        return JSON.stringify({key: value})
    }

    getItem(key) {
        var items = this.fetchItems();
        return items[key]
    }

    isLoggedIn() {
        var items = this.fetchItems();
        return items['loginInfo'] !== '0' && items['loginInfo'];
        // return false;
    }
}
