//** Dependencies **//
import { Table as FbTable } from "flowbite-react";
import { IUser } from "../../../../data/types/IUser";
import { ICard } from "../../../../data/types/ICard";
import { useEffect, useState } from "react";
import MoreDetails from "../MoreDetails/MoreDetails.component";
import { TableProps } from "./Table.props";
import UsersTable from "../../tables/UsersTable/UsersTable.component";
import CardsTable from "../../tables/CardsTable/CardsTable.component";
import Styles from "./Table.style";

//** UsersTable Component **//
const Table = (props: TableProps) => {
  //** Props **//
  const { data, dataType, getAllUsers, loadCards, cardsDeckRef } = props;

  //** State **//
  const [selected, setSelected] = useState<IUser | ICard | null>(null);

  //** Effects **//
  useEffect(() => {
    // reset selected on dataType change
    return () => {
      setSelected(null);
    };
  }, [dataType]);

  //** JSX **//
  return (
    <div>
      <div className={Styles.container}>
        <FbTable hoverable striped>
          <FbTable.Body className={Styles.tBody}>
            {dataType === "users" &&
              (data as IUser[]).map((user: IUser) => (
                <UsersTable
                  key={user._id}
                  user={user}
                  setSelected={setSelected}
                />
              ))}
            {dataType === "cards" &&
              (data as ICard[]).map((card: ICard) => (
                <CardsTable
                  key={card._id}
                  card={card}
                  setSelected={setSelected}
                />
              ))}
          </FbTable.Body>
        </FbTable>
      </div>

      {selected && (
        <MoreDetails
          cardsDeckRef={cardsDeckRef}
          loadCards={loadCards}
          getAllUsers={getAllUsers}
          setSelected={setSelected}
          details={selected}
          dataType={dataType}
        />
      )}
    </div>
  );
};

export default Table;
