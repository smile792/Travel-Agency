import { Button, Center, Modal, Table } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Form } from "../Form/form";

export const CustomTables = ({ array }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const rows = array.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td pr={50}>{element.day}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.price}₽</Table.Td>
      <Table.Td>{element.rating}</Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Кол-во дней</Table.Th>
            <Table.Th>Отели</Table.Th>
            <Table.Th>Цена</Table.Th>
            <Table.Th>Рейтинг</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Center>
        <Modal opened={opened} onClose={close} title="Оставить заявку" centered>
          <Form />
        </Modal>
        <Button color="indigo" fullWidth mt="md" radius="md" onClick={open}>
          Подробнее
        </Button>
      </Center>
    </>
  );
};
