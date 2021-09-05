interface ISignContext {
  userid: number;
  isSigned: boolean;
  trySignIn: (id: number) => void;
  trySignUp: () => void;
}
