import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageService {
  async getItem<T>(key: string): Promise<T | null> {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value) as T;
      }
      return null;
    } catch (error) {
      console.error(`Error getting item from AsyncStorage: ${error}`);
      return null;
    }
  }

  async setItem(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(`Error setting item in AsyncStorage: ${error}`);
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from AsyncStorage: ${error}`);
    }
  }

  async removeMultipleItems(key: string[]): Promise<void> {
    try {
      await AsyncStorage.multiRemove(key);
    } catch (error) {
      console.error(`Error removing item from AsyncStorage: ${error}`);
    }
  }
}

export const asyncStorageService = new AsyncStorageService();
