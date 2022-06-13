import { CssBaseline } from "../node_modules/@mui/material/index"
import GlobalStyle from "./commons/styles/global-style";
import Main from './containers/Main/index'


export default function App() {
  return (
    <>
      <CssBaseline/>
      <GlobalStyle/>
      <Main />
    </>
  );
}
