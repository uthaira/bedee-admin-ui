import type { BaseTableProps } from "../../components/table/BaseTable/constants";
import dataSource from "./data-source.json";

export type Datatype = {
  id: string;
  name: string;
  isActive: boolean;
  picture: string;
  age: number;
  tags: string[];
  greeting: string;
  favoriteFruit: string;
};

export const BASE_TABLE_PROPS: BaseTableProps<Datatype> = {
  dataSource,
  getTableBodyRowKey: ({ data }) => data.id,
  tableContainerProps: {
    style: { maxHeight: 400 },
  },
  tableProps: {
    stickyHeader: true,
  },
  columns: [
    {
      key: "select",
      tableHeadColumnCellProps: {
        sx: {
          width: 'width: 5%',
          minWidth: '20px'
        },
      },
      tableHeadColumnCellRenderer: null,
      tableBodyRowCell: {
        type: 'custom',
        render: () => <input type="checkbox" />,
      }
    },
    {
      key: "id",
      tableHeadColumnCellProps: {
        sx: {
          width: 'width: 20%',
          minWidth: '250px'
        },
      },
      tableHeadColumnCellRenderer: "ID",
    },
    {
      key: "name",
      tableHeadColumnCellProps: {
        sx: {
          width: 'width: 15%',
          minWidth: '100px'
        },
      },
      tableHeadColumnCellRenderer: "Name",
    },
    {
      key: "isActive",
      tableHeadColumnCellRenderer: "Active",
      tableHeadColumnCellProps: {
        align: "center",
        sx: {
          width: 'width: 13%',
          minWidth: '50px',
        },
      },
      tableBodyRowCell: {
        type: "custom",
        defaultTableBodyRowCellProps: {
          align: "center",
        },
        render: ({ data }) => data.isActive ? "Yes" : "No",
      }
    },
    {
      key: 'greeting',
      tableHeadColumnCellProps: {
        align: "center",
        sx: {
          width: 'width: 17%',
          minWidth: '150px'
        },
      },
      tableHeadColumnCellRenderer: (
        <p style={{ margin: 0, color: 'blue', minWidth: 250, fontWeight: 300, fontSize: 26 }}>Greeting</p>
      ),
    },
    {
      key: 'tags',
      tableHeadColumnCellProps: {
        align: "center",
        sx: {
          width: 'width: 15%',
          minWidth: '150px'
        },
      },
      tableHeadColumnCellRenderer: 'Tags',
      tableBodyRowCell: {
        type: 'custom',
        render: ({ data }) => <p style={{ margin: 0, minWidth: 300 }}>{data.tags.join(', ')}</p>,
      },
    },
    {
      key: 'favoriteFruit',
      tableHeadColumnCellRenderer: 'Favorite Fruit',
      tableHeadColumnCellProps: {
        align: 'center',
        sx: {
          width: 'width: 15%',
          minWidth: '150px',
        },
      },
      tableBodyRowCell: {
        defaultTableBodyRowCellProps: {
          align: 'center',
        },
      }
    }
  ],
};