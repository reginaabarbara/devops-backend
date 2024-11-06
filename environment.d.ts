declare global {
    namespace NodeJS {
      interface ProcessEnv {
        MODE: string;
        
      }
    }
  }
  
  export {};
  