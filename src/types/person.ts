export interface PersonType {
  name: string;
  lastname: string;
  photo: {
    file: {
      url: string;
    };
  };
  company?: string;
  position?: string;
}
