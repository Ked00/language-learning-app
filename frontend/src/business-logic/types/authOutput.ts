export type authOutPut = {
  value: string | null;
  getAuthenticated: (provider:string) => void;
};

export type authState = string | null;
