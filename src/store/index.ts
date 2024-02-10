import { create } from "zustand";

interface IUserState {
  user: object | null,
  saveUser: (arg: object) => void,
  logOut: () => void
}
interface IEmployeeState {
  employee: object | null,
  saveEmployee: (arg: object) => void,
  logOut: () => void
}

export const userStore = create<IUserState>((set) => (
  {
    user: null,
    saveUser: (values) => {
      set({ user: values })
    },
    logOut: () => {
      set({ user: null })
    },
  }
));

export const employeeStore = create<IEmployeeState>((set) => (
  {
    employee: null,
    saveEmployee: (values) => {
      set({ employee: values })
    },
    logOut: () => {
      set({ employee: null })
    },
  }
));