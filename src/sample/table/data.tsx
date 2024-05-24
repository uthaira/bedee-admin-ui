import type { BaseTableProps } from "../../components/table/BaseTable/constants";
import rows from "./data-source.json";

export type DataType = {
  id: string
  name: string
  isActive: boolean
  picture: string
  age: number
  tags: string[]
  greeting: string
  favoriteFruit: string
};

export const BASE_TABLE_PROPS: BaseTableProps<DataType> = {
  rows,
  rowKeyName: 'id',
  containerProps: {
    style: { maxHeight: 400 },
  },
  tableProps: {
    stickyHeader: true,
  },
  columns: [
    {
      key: "select",
      cellProps: {
        sx: {
          width: 'width: 5%',
          minWidth: '20px'
        },
      },
      cellContent: null,
      bodyRowCell: {
        type: 'custom',
        cellContent: () => <input type="checkbox" />,
      }
    },
    {
      key: "id",
      cellProps: {
        sx: {
          width: 'width: 20%',
          minWidth: '250px'
        },
      },
      cellContent: "ID",
    },
    {
      key: "name",
      cellProps: {
        sx: {
          width: 'width: 15%',
          minWidth: '100px'
        },
      },
      cellContent: "Name",
    },
    {
      key: "isActive",
      cellContent: "Active",
      cellProps: {
        align: "center",
        sx: {
          width: 'width: 13%',
          minWidth: '50px',
        },
      },
      bodyRowCell: {
        type: "custom",
        cellProps: {
          align: "center",
        },
        cellContent: ({ data }) => data.isActive ? "Yes" : "No",
      }
    },
    {
      key: 'greeting',
      cellProps: {
        align: "center",
        sx: {
          width: 'width: 17%',
          minWidth: '150px'
        },
      },
      cellContent: (
        <p style={{ margin: 0, color: 'blue', minWidth: 250, fontWeight: 300, fontSize: 26 }}>Greeting</p>
      ),
    },
    {
      key: 'tags',
      cellProps: {
        align: "center",
        sx: {
          width: 'width: 15%',
          minWidth: '150px'
        },
      },
      cellContent: 'Tags',
      bodyRowCell: {
        type: 'custom',
        cellContent: ({ data }) => <p style={{ margin: 0, minWidth: 300 }}>{data.tags.join(', ')}</p>,
      },
    },
    {
      key: 'favoriteFruit',
      cellContent: 'Favorite Fruit',
      cellProps: {
        align: 'center',
        sx: {
          width: 'width: 15%',
          minWidth: '150px',
        },
      },
      bodyRowCell: {
        cellProps: {
          align: 'center',
        },
      }
    }
  ],
}