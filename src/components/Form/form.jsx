import { Button, Center, Input, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Controller, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";

export const Form = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  const validateNotEmpty = (value) => {
    return value.trim() !== "" || "Обязательное поле";
  };
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        open();
      })}
    >
      <Controller
        name="firstName"
        control={control}
        rules={{
          validate: validateNotEmpty,
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Имя может состоять только из букв",
          },
        }}
        render={({ field }) => (
          <Input.Wrapper mb={5} error={formState.errors.firstName?.message}>
            <Input {...field} placeholder="Имя" />
          </Input.Wrapper>
        )}
      />

      <Controller
        name="lastName"
        control={control}
        rules={{
          validate: validateNotEmpty,
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Фамилия может состоять только из букв",
          },
        }}
        render={({ field }) => (
          <Input.Wrapper mb={5} error={formState.errors.lastName?.message}>
            <Input {...field} placeholder="Фамилия" />
          </Input.Wrapper>
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{
          validate: validateNotEmpty,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Неверный формат email",
          },
        }}
        render={({ field }) => (
          <Input.Wrapper mb={5} error={formState.errors.email?.message}>
            <Input {...field} placeholder="Email" />
          </Input.Wrapper>
        )}
      />

      <Controller
        name="tel"
        control={control}
        rules={{
          required: "Это обязательное поле",
          validate: (value) =>
            value.replace(/\D/g, "").length === 11 ||
            "Номер должен содержать 11 цифр",
        }}
        render={({ field }) => (
          <Input.Wrapper mb={5} error={formState.errors.tel?.message}>
            <Input
              {...field}
              placeholder="Телефон"
              component={IMaskInput}
              mask="+7 (000) 000-00-00"
            />
          </Input.Wrapper>
        )}
      />
      <Center mt={10}>
        <Modal opened={opened} onClose={close} title="Заявка" centered>
          Менеджер скоро с вами свяжется!
        </Modal>
        <Button type="submit">Отправить заявку</Button>
      </Center>
    </form>
  );
};
