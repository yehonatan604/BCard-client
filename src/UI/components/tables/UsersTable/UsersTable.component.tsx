//** Dependencies **//
import { Table as FbTable } from "flowbite-react";
import Styles from "./UsersTable.style";
import { UsersTableProps } from "./UsersTable.props";

//** UsersTable Component **//
const UsersTable = (props: UsersTableProps) => {
  //** Props **//
  const { user, setSelected } = props;

  //** JSX **//
  return (
    <FbTable.Row
      key={user._id}
      className={Styles.tableRow}
      onClick={() => setSelected(user)}
    >
      <FbTable.Cell
        className={Styles.tableCell}
      >{`${user.name.first} ${user.name.last}`}</FbTable.Cell>
      <FbTable.Cell className={Styles.tableCell}>{user.email}</FbTable.Cell>
      <FbTable.Cell className={Styles.tableCell}>{user.phone}</FbTable.Cell>
      <FbTable.Cell className={Styles.tableCell}>
        {user.isBusiness ? "Biz" : "Personal"}
      </FbTable.Cell>
    </FbTable.Row>
  );
};

export default UsersTable;
