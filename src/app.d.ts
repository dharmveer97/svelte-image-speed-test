// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

// Vite-imagetools type declarations
declare module '*?w=*&format=*&as=picture' {
  const value: {
    sources: Array<{
      srcset: string;
      type: string;
    }>;
    img: {
      src: string;
      width: number;
      height: number;
    };
  };
  export default value;
}

declare module '*?enhanced' {
  const value: string;
  export default value;
}

export {};
