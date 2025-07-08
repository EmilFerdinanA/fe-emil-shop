import Cookies from "js-cookie";

const EXPIRES_IN_DAYS = 1;

export const storage = {
  getItem: (key: string): Promise<string | null> => {
    return Promise.resolve(Cookies.get(key) || null);
  },
  setItem: (key: string, value: string): Promise<void> => {
    Cookies.set(key, value, {
      expires: EXPIRES_IN_DAYS,
      secure: true,
      sameSite: "strict",
    });
    return Promise.resolve();
  },
  removeItem: (key: string): Promise<void> => {
    Cookies.remove(key);
    return Promise.resolve();
  },
};
