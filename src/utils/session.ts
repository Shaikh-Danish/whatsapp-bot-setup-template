import NodeCache from "node-cache";

interface CacheOptions {
  stdTTL: number;
  checkperiod: number;
}

const cacheOptions: CacheOptions = { stdTTL: 100, checkperiod: 120 };
const myCache = new NodeCache(cacheOptions);

class Cache {
  create(obj: any, key: string, ttl: number = 30000) {
    myCache.set(key, obj, ttl);
  }

  setItem(itemName: string, item: any, key: string) {
    if (this.has(key)) {
      const items = myCache.get(key) as { [itemName: string]: any };
      items[itemName] = item;
      myCache.set(key, items);
    }
  }

  getItem(itemName: string, key: string) {
    if (this.has(key)) {
      const items = myCache.get(key) as { [itemName: string]: any };
      if (this.hasItem(itemName, key)) {
        return items[itemName];
      }
    }
  }

  deleteItem(itemName: string, key: string) {
    if (this.has(key) && this.hasItem(itemName, key)) {
      const items = myCache.get(key) as { [itemName: string]: any };
      delete items[itemName];
      myCache.set(key, items);
    }
  }

  getItems(key: string) {
    if (this.has(key)) {
      return myCache.get(key);
    }
  }

  hasItem(itemName: string, key: string) {
    if (this.has(key)) {
      const items = myCache.get(key) as { [itemName: string]: any };
      return items.hasOwnProperty(itemName);
    }
    return false;
  }

  has(key: string) {
    return myCache.has(key);
  }
}

const cacheInstance = new Cache();

export default cacheInstance;
