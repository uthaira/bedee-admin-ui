import type { BaseTableProps } from "../../components/table/BaseTable/constants";

type Datatype = {
  id: string;
  name: string;
  isActive: boolean;
  picture: string;
  age: number;
  tags: string[];
  greeting: string;
  favoriteFruit: string;
};

const DATA_SOURCE: Datatype[] = [
  {
    id: "664e08f3c3f61e1cde385822",
    name: "Forbes",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 29,
    tags: [
      "et",
      "aliquip",
      "veniam",
      "velit",
      "est",
      "aute",
      "ullamco"
    ],
    greeting: "Hello, Forbes! You have 7 unread messages.",
    favoriteFruit: "banana"
  },
  {
    id: "664e08f3c46a4d7d3d8214a0",
    name: "Ashlee",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 25,
    tags: [
      "ut",
      "exercitation",
      "voluptate",
      "ullamco",
      "incididunt",
      "velit",
      "mollit"
    ],
    greeting: "Hello, Ashlee! You have 3 unread messages.",
    favoriteFruit: "apple"
  },
  {
    id: "664e08f37d6da5f7cfd0573e",
    name: "Powers",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 26,
    tags: [
      "quis",
      "veniam",
      "laborum",
      "culpa",
      "adipisicing",
      "ex",
      "deserunt"
    ],
    greeting: "Hello, Powers! You have 9 unread messages.",
    favoriteFruit: "apple"
  },
  {
    id: "664e08f30aaeffa6c326265b",
    name: "Mccormick",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 24,
    tags: [
      "sunt",
      "proident",
      "ex",
      "ipsum",
      "esse",
      "adipisicing",
      "aute"
    ],
    greeting: "Hello, Mccormick! You have 7 unread messages.",
    favoriteFruit: "strawberry"
  },
  {
    id: "664e08f322710bf2e4643027",
    name: "Marcella",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 32,
    tags: [
      "sunt",
      "duis",
      "tempor",
      "qui",
      "officia",
      "amet",
      "duis"
    ],
    greeting: "Hello, Marcella! You have 3 unread messages.",
    favoriteFruit: "strawberry"
  },
  {
    id: "664e08f3fb15cff2ba467b2b",
    name: "Williams",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 39,
    tags: [
      "quis",
      "minim",
      "anim",
      "pariatur",
      "id",
      "id",
      "Lorem"
    ],
    greeting: "Hello, Williams! You have 9 unread messages.",
    favoriteFruit: "strawberry"
  },
  {
    id: "664e08f3e22adb4ae97bcb60",
    name: "Alyce",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 39,
    tags: [
      "officia",
      "laboris",
      "proident",
      "magna",
      "est",
      "esse",
      "aliquip"
    ],
    greeting: "Hello, Alyce! You have 2 unread messages.",
    favoriteFruit: "apple"
  },
  {
    id: "664e08f3e0deb8b096e49363",
    name: "Virgie",
    isActive: false,
    picture: "http://placehold.it/32x32",
    age: 22,
    tags: [
      "cillum",
      "nulla",
      "adipisicing",
      "eu",
      "quis",
      "consequat",
      "sit"
    ],
    greeting: "Hello, Virgie! You have 2 unread messages.",
    favoriteFruit: "strawberry"
  }
];

export const BASE_TABLE_PROPS: BaseTableProps<Datatype> = {
  dataSource: DATA_SOURCE,
  getTableBodyRowKey: ({ data }) => data.id,
  tableContainerProps: {
    style: { maxWidth: 800, maxHeight: 400 },
  },
  tableHeadRowProps: {
    style: { position: 'sticky', top: 0 },
  },
  columns: [
    {
      key: "select",
      tableHeadColumnCellRenderer: "Select",
      tableBodyRowCell: {
        type: 'custom',
        render: () =>  <input type="checkbox" />,
      }
    },
    {
      key: "id",
      tableHeadColumnCellRenderer: "ID",
    },
    {
      key: "name",
      tableHeadColumnCellRenderer: "Name",
    },
    {
      key: "isActive",
      tableHeadColumnCellRenderer: "Active",
      tableHeadColumnCellProps: {
        align: "center",
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
      tableHeadColumnCellRenderer: (
        <p style={{ color: 'blue', minWidth: 250 }}>Greeting</p>
      ),
    },
    {
      key: 'tags',
      tableHeadColumnCellRenderer: 'Tags',
      tableBodyRowCell: {
        type: 'custom',
        render: ({ data }) => <p style={{ minWidth: 300 }}>{data.tags.join(', ')}</p>,
      },
    },
    {
      key: 'favoriteFruit',
      tableHeadColumnCellRenderer: 'Favorite Fruit',
      tableHeadColumnCellProps: {
        align: 'center',
      },
      tableBodyRowCell: {
        defaultTableBodyRowCellProps: {
          align: 'center',
        },
      }
    }
  ],
};