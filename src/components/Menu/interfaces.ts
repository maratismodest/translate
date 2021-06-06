import firebase from 'firebase'

export interface MenuComponentInterface {
  user: firebase.User | null
}

export interface MenuInterface {
  text: string;
  cb: () => void;
  id?: string;
}

export interface StyledMenuInterface {
  arr: MenuInterface[];
  visible: boolean;
  setVisible: any;
  user?: any;
  className?: any;
}
