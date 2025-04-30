import { Paper } from "@mantine/core";
import { Layout } from "../../components/layout/layout";
import IconTelegram from "/src/svg-image/telegram.svg?react";
import IconWhatsapp from "/src/svg-image/whatsapp.svg?react";
import { MyLink } from "../../components/myLink/myLink";

export const Contacts = () => {
  return (
    <Layout>
      <div className="contacts">
        📍 Наш адрес: г. Москва, ул. Ленина, д. 10, офис 5 <br></br>
        🕒 Режим работы: Понедельник – Пятница: 10:00 – 19:00 Суббота –
        Воскресенье: 11:00 – 17:00 <br></br>
        Индивидуальный предприниматель: Шихбабаев Шихали<br></br>
        📜 ИНН: 123456789012<br></br>
        🏦 Расчётный счёт: 40802810400000000001<br></br>
        📑 ОГРНИП: 319774600000000 <br></br>
        🏛 Банк: ПАО «Сбербанк»<br></br>
        БИК: 044525225 <br></br>
        Корр. счёт: 30101810400000000225 <br></br>
        Контакты: <br></br>
        📱Телефон:
        <MyLink to={"tel:+7(903)423-84-93"}>+7 (903) 423-84-93</MyLink>
        <br></br>
        📧Email:
        <MyLink to="mailto:info@mail.ru">info@mail.ru</MyLink>
        <br></br>
        Написать нам:
        <div className="contacts-bottom">
          <MyLink to={"https://wa.me/79034238493"}>
            <IconWhatsapp />
          </MyLink>
          <MyLink to={"https://t.me/only_smile5"}>
            <IconTelegram />
          </MyLink>
        </div>
      </div>
    </Layout>
  );
};
