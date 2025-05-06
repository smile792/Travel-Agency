import { Navigate, Route, Routes } from "react-router";
import { Paths } from "../paths";
import { Main } from "../page/main/main";
import { Information } from "../page/information/information";
import { Contacts } from "../page/contacts/contacts";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={Paths.main} element={<Main />} />
      <Route path={Paths.information} element={<Information />} />
      <Route path={Paths.contacts} element={<Contacts />} />
      <Route path="*" element={<Navigate to={"/"} />} replace />
    </Routes>
  );
};
