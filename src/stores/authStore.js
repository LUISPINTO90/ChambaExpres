import { signInWithPopup, signOut } from "firebase/auth";
import create from "zustand";
import { auth, googleProvider } from "../firebase/config";

export const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  signInWithGoogle: async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      set({ user: result.user });

      return result.user;
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  },
  signOut: async (auth) => {
    try {
      await signOut(auth);
      set({ user: null });
    } catch (error) {
      console.error("Error signing out", error);
    }
  },
}));
