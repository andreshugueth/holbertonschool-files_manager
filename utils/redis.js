import { createClient } from 'redis';
import { promisify } from 'util';

class RedisClient {
  constructor() {
    this.client = createClient();
    this.getClientInfo = promisify(this.client.get).bind(this.client);

    this.client.on('error', (err) => console.error('Redis Client Error', err));

    this.client.on('connect', () => { });
  }

  isAlive() {
    return this.client.connected;
  }

  async get(key) {
    return await this.getClientInfo(key)
  }

  async set(key, value, time) {
    return await this.client.setex(key, time, value);
  }

  async del(key) {
    return await this.client.del(key);
  }
}

const redisClient = new RedisClient()

export default redisClient;
