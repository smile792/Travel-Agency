import { Button, Modal } from "@mantine/core";
import { CustomCarousel } from "../custom-carousel/custom-carousel";
import { useDisclosure } from "@mantine/hooks";
import { CustomTables } from "../custom-tables/custom-tables";

export const CustomModal = ({ images, array }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="Подробнее" centered>
        <CustomCarousel images={images} />
        <CustomTables array={array} />
      </Modal>
      <Button color="indigo" fullWidth mt="md" radius="md" onClick={open}>
        Подробнее
      </Button>
    </>
  );
};
