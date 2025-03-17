export {};

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize(arg0: { client_id: string; callback: (response: GoogleSignInResponse) => void; }): void;
          prompt: () => void;
        };
      };
    };
  }
}

interface GoogleSignInResponse {
  credential: string;
  select_by: string;
}
