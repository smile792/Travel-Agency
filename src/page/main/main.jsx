import { useEffect, useMemo } from "react";
import { MyCard } from "../../UI/myCard/myCard";
import { CustomModal } from "../../UI/Modal/custom-modal";
import {
  useTable,
  useFilter,
  useImage,
  useText,
  useTitle,
  useDescription,
} from "../../store/store";
import { Input } from "@mantine/core";

export const Main = () => {
  const image = useImage();
  const array = useTable();
  const title = useTitle();
  const description = useDescription();
  const { filter, setFilter } = useFilter();
  const { text, setText } = useText();
  const allKeys = useMemo(() => Object.keys(title), [title]);

  const filteredKeys = useMemo(() => {
    return allKeys.filter((key) =>
      title[key].toLowerCase().includes(text.trim().toLowerCase())
    );
  }, [allKeys, text, title]);

  useEffect(() => {
    setFilter(filteredKeys);
  }, [filteredKeys]);

  const cardsData = [
    {
      key: title.Antalya,
      src: image.antalyaImages[0],
      title: title.Antalya,
      description: description.Antalya,
      images: image.antalyaImages,
      array: array.antalya,
    },
    {
      key: title.Bali,
      src: image.baliImages[0],
      title: title.Bali,
      description: description.Bali,
      images: image.baliImages,
      array: array.bali,
    },
    {
      key: title.Tailand,
      src: image.tailandImages[0],
      title: title.Tailand,
      description: description.Tailand,
      images: image.tailandImages,
      array: array.tailand,
    },
    {
      key: title.Dubai,
      src: image.dubaiImages[0],
      title: title.Dubai,
      description: description.Dubai,
      images: image.dubaiImages,
      array: array.dubai,
    },
  ];
  return (
    <div className="container">
      <div className="main">
        <div className="main-page">
          <Input
            placeholder="Поиск тура"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {cardsData
            .filter((card) => filter.includes(card.key))
            .map((card) => (
              <MyCard key={card.key} src={card.src} title={card.title}>
                {card.description}
                <CustomModal images={card.images} array={card.array} />
              </MyCard>
            ))}
        </div>
      </div>
    </div>
  );
};
