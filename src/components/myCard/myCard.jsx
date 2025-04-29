import { Card, Image, Text, Title, Center } from "@mantine/core";
export const MyCard = ({ src, alt, children, title, mt }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" mt={mt}>
      <Card.Section>
        <Image src={src} height={170} alt={alt} title={title} />
      </Card.Section>
      <Center>
        <Title size={30} c={"#A9203E"}>
          {title}
        </Title>
      </Center>
      <Text size="sm" c="#3F888F" mt={5} component="p">
        {children}
      </Text>
    </Card>
  );
};
