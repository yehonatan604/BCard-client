import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useAPI from "../../../core/hooks/useAPI";
import { HttpMethods } from "../../../data/enums/HttpMethods.enum";
import { ICard } from "../../../data/types/ICard";
import { paths } from "../../../data/constants/paths";
import Flex from "../../components/shared/Flex/Flex.component";
import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import { Textarea } from "flowbite-react";
import { FlexTypes } from "../../../data/enums/FlexTypes.enum";

const Biz = () => {
  const [card, setCard] = useState<ICard | null>(null);
  const id = useLocation().pathname.split("/")[2];
  const { sendApiRequest } = useAPI();

  const callNumber = (e: React.MouseEvent<HTMLParagraphElement>) => {
    window.open(`tel:${e.currentTarget.textContent}`);
  };

  const sendEmail = (e: React.MouseEvent<HTMLParagraphElement>) => {
    window.open(`mailto:${e.currentTarget.textContent}`);
  };

  const openWeb = (e: React.MouseEvent<HTMLParagraphElement>) => {
    window.open(`${e.currentTarget.textContent}`);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await sendApiRequest(
          `${paths.cards}/${id}`,
          HttpMethods.GET,
        );
        if (res) setCard(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [id, sendApiRequest]);

  return (
    <Flex
      dir={FlexDirs.Column}
      items={FlexTypes.Start}
      className="m-auto w-[60vw]"
    >
      <Flex className="my-2 w-full">
        <h1 className="overflow-hidden text-3xl">{card?.title}</h1>
      </Flex>
      <Flex className="my-4 w-full">
        <h3 className="text-xl">{card?.subtitle}</h3>
      </Flex>
      <Flex justify={FlexTypes.Start} className="m-auto my-5 w-1/2 bg-slate-300 border border-violet-300 shadow-xl shadow-slate-800 rounded-xl">
        <h4 className="h-[15vh] p-3 cursor-default">
          {card?.description}
        </h4>
      </Flex>
      <Flex
        dir={FlexDirs.Column}
        items={FlexTypes.Start}
        className="m-auto my-5 w-1/2"
      >
        <Flex className="gap-2">
          <p>phone:</p>
          <p
            className="cursor-pointer hover:text-blue-500"
            onClick={callNumber}
          >
            {card?.phone}
          </p>
        </Flex>
        <Flex className="gap-2">
          <p>email:</p>
          <p className="cursor-pointer hover:text-blue-500" onClick={sendEmail}>
            {card?.email}
          </p>
        </Flex>
        {card?.web && <Flex className="gap-2">
          <p>web:</p>
          <p className="cursor-pointer hover:text-blue-500" onClick={openWeb}>
            {card?.web}
          </p>
        </Flex>}
      </Flex>
      <Flex className="mb-7 h-[60vh] w-full shadow-md shadow-slate-900">
        <iframe
          className="h-full w-full rounded-lg "
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA0ONZpJibVTK2YEDO8NSAuZW9qQmWejwk
    &q=${card?.address.street} ${card?.address.city} ${card?.address.country}`}
        ></iframe>
      </Flex>
    </Flex>
  );
};

export default Biz;
