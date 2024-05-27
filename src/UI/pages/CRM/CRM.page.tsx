//** Dependencies **//
import Flex from "../../components/shared/Flex/Flex.component";
import Styles from "./CRM.style";
import useCards from "../../../core/hooks/useCards";
import { useEffect, useRef, useState } from "react";
import { ICard } from "../../../data/types/ICard";
import usePagination from "../../../core/hooks/usePagination.ts";
import { Pagination, Spinner } from "flowbite-react";
import useWindow from "../../../core/hooks/useWindow.ts";
import { useSelector } from "react-redux";
import { IRootState } from "../../../data/types/IRootState.ts";
import useAuth from "../../../core/hooks/useAuth.ts";
import Table from "../../components/shared/Table/Table.component.tsx";
import { IUser } from "../../../data/types/IUser.ts";

//** CRM Page **//
const CRM = () => {
  //** State **//
  const [currTable, setCurrTable] = useState<"cards" | "users">("cards");
  const [currData, setCurrData] = useState<ICard[] | IUser[]>([]);

  //** Hooks **//
  const cardsRef = useRef<ICard[]>([]);
  const { cards, loading: cardsLoading, loadCards } = useCards(cardsRef, true);
  const { getAllUsers, users, loading: usersLoading } = useAuth();
  const { currentPage, onPageChange } = usePagination();
  const { isMobile } = useWindow();

  //** Redux **//
  const search = useSelector(
    (state: IRootState) => state.SearchSlice.search,
  ) as string;

  //** Effects **//
  useEffect(() => {
    cardsRef.current = cards;
    if (cards.length > 0) {
      setCurrData(cards);
    }
    getAllUsers();
  }, [getAllUsers, currData]);

  //** JSX **//
  return (
    <>
      <div className={Styles.titleContainer}>
        <h1 className={Styles.title}>Client Relations/Content Management</h1>
        <p className={Styles.subtitle}>
          here you can View/Edit/Delete Cards & users, please click a record to
          view full details
        </p>
      </div>
      <div className={Styles.titleContainer}>
        <Flex>
          <p
            className={Styles.menuHeader}
            id="cards"
            onClick={() => setCurrTable("cards")}
            style={{ fontWeight: currTable === "cards" ? "bold" : "" }}
          >
            Cards
          </p>
          <p className={Styles.menuHeader}>/</p>
          <p
            className={Styles.menuHeader}
            id="users"
            onClick={() => setCurrTable("users")}
            style={{ fontWeight: currTable === "users" ? "bold" : "" }}
          >
            Users
          </p>
        </Flex>
      </div>
      <Flex className="m-auto w-3/4">
        {currTable === "cards" ? (
          <Table
            cardsDeckRef={cardsRef}
            loadCards={loadCards}
            dataType={currTable}
            getAllUsers={getAllUsers}
            data={cards.filter((_, index) => {
              return index >= currentPage * 5 && index < (currentPage + 1) * 5;
            })}
          />
        ) : (
          <Table
            cardsDeckRef={cardsRef}
            loadCards={loadCards}
            getAllUsers={getAllUsers}
            dataType={currTable}
            data={users
              .filter((user) => {
                return (
                  user.name.first
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  user.name.last.toLowerCase().includes(search.toLowerCase()) ||
                  user.email.toLowerCase().includes(search.toLowerCase())
                );
              })
              .filter((_, index) => {
                return (
                  index >= currentPage * 5 && index < (currentPage + 1) * 5
                );
              })}
          />
        )}
      </Flex>
      {(cardsLoading || usersLoading) && (
        <Flex className={Styles.spinnerDiv}>
          <Spinner
            color="purple"
            aria-label="Loading spinner"
            className="flex h-[100vh] overflow-y-hidden"
            size={"xl"}
          />
        </Flex>
      )}
      <Flex className={Styles.pagination}>
        <Pagination
          layout={isMobile ? "navigation" : "pagination"}
          currentPage={currentPage}
          totalPages={Math.ceil(cards.length / 5)}
          onPageChange={onPageChange}
          nextLabel=""
          previousLabel=""
          showIcons
        />
      </Flex>
    </>
  );
};

export default CRM;
