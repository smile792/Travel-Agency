import { Group, Paper } from "@mantine/core";
import { Layout } from "../../components/layout/layout";
import { Link } from "react-router";
import IconTelegram from "/src/svg-image/telegram.svg?react";
import IconWhatsapp from "/src/svg-image/whatsapp.svg?react";

export const Contacts = () => {
  return (
    <Layout>
      <Paper bg="#395778" radius="md" mt={20}>
        <div style={{ padding: 20 }}>
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
          📞 Контакты: <br></br>
          📱 Телефон:
          <Link
            to={"tel:+7(903)423-84-93"}
            style={{ textDecoration: "none", color: "#1974D2" }}
          >
            +7 (903) 423-84-93
          </Link>
          <br></br>
          📧Email:
          <Link to="mailto:info@mail.ru">info@mail.ru</Link>
          <br></br>
          Написать нам:
          <Group>
            <Link to={"https://wa.me/79034238493"}>
              <IconWhatsapp />
            </Link>
            <Link to={"https://t.me/only_smile5"}>
              <IconTelegram />
            </Link>
          </Group>
        </div>
      </Paper>
    </Layout>
  );
};
