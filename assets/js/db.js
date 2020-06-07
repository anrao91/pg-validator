class LocalStorage {
  get(key, parseJson) {
    let data = localStorage.getItem(key) || null;
    if (data && parseJson) {
      try {
        data = JSON.parse(data);
      } catch (error) {
        console.error(error);
      }
    }
    return data;
  }
  getAll() {
    let data = {};
    for (var i = 0, len = localStorage.length; i < len; i++) {
      try {
        var key = localStorage.key(i);
        data[key] = JSON.parse(localStorage.getItem(key));
      } catch (error) {
        console.error(error);
      }
    }
    return data;
  }
  save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  deleteItem(key) {
    localStorage.removeItem(key);
  }
  deleteAll() {
    localStorage.clear();
  }
}

export const CardDataStorage = new LocalStorage();
