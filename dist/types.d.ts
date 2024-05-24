import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps as ButtonProps$1, SwitchProps as SwitchProps$1, DialogProps as DialogProps$1, DialogTitleProps, TypographyProps, RadioProps, TabsProps as TabsProps$1, SelectProps, TableContainerProps, TableProps, TableHeadProps, TableBodyProps, TextFieldProps } from '@mui/material';
import React$1, { ChangeEvent, ReactNode, FC } from 'react';
import { TableRowProps } from '@mui/material/TableRow';
import { TableCellProps } from '@mui/material/TableCell';
import { TablePaginationProps } from '@mui/material/TablePagination';

interface ButtonProps extends ButtonProps$1 {
    bdType?: 'primary' | 'secondary' | 'outlined' | 'remove';
    bdSize?: string;
    icon?: JSX.Element;
    text?: string;
    loading?: boolean;
    width?: string;
    isRightIcon?: boolean;
    counter?: number;
}
declare const Button: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const PrimaryBtn: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const SecondaryBtn: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const OutlinedBtn: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

declare const RemoveBtn: (props: ButtonProps) => react_jsx_runtime.JSX.Element;

type Position = 'top' | 'right' | 'bottom' | 'left';
interface DrawerProps {
    open: boolean;
    title: string;
    buttonText: string;
    corner?: string;
    position: Position;
    width?: string | number;
    onClose?: () => void;
    onClick?: () => void;
    onCorner?: () => void;
    children: React.ReactNode;
}
declare const Drawer: (props: DrawerProps) => react_jsx_runtime.JSX.Element;

interface SideMenuProps {
    menus: any[];
    visible: boolean;
    username: string;
    role: string;
    version: string;
    onLogout?: () => void;
    onVisible: () => void;
}
declare const SideMenu: (props: SideMenuProps) => react_jsx_runtime.JSX.Element;

interface SwitchProps extends SwitchProps$1 {
    bdSize?: string;
}
declare const Switch: (props: SwitchProps) => react_jsx_runtime.JSX.Element;

interface SwitchLabelProps extends SwitchProps {
    label: string;
    hint?: string;
}
declare const SwitchLabel: (props: SwitchLabelProps) => react_jsx_runtime.JSX.Element;

interface DialogProps extends DialogProps$1 {
    subTitle?: string;
    children?: React$1.ReactNode;
    icon?: React$1.ReactNode;
    onConfirm?: () => void;
    onCancel?: () => void;
    onClose?: () => void;
    bdSize?: string;
    cancelText?: string;
    confirmText?: string;
    isCloseIcon?: boolean;
    width?: string;
    titleProps?: DialogTitleProps;
    subTitleProps?: DialogTitleProps;
}
declare const Dialog: (props: DialogProps) => react_jsx_runtime.JSX.Element;

declare const ConfirmChangeDialog: ({ cancelText, confirmText, title, subTitle, ...props }: DialogProps) => react_jsx_runtime.JSX.Element;

declare const ConfirmDiscardDialog: ({ confirmText, title, subTitle, ...props }: DialogProps) => react_jsx_runtime.JSX.Element;

declare const InfoDialog: ({ confirmText, title, subTitle, ...props }: DialogProps) => react_jsx_runtime.JSX.Element;

declare const ErrorDialog: ({ confirmText, title, subTitle, ...props }: DialogProps) => react_jsx_runtime.JSX.Element;

interface RadioGroupData {
    label: string;
    value: string | number;
}
interface RadioGroupProps {
    name?: string;
    data: RadioGroupData[];
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>, name?: string) => void;
    isRow?: boolean;
    title?: string;
    disabled?: boolean;
    titleProps?: TypographyProps;
}
declare const RadioGroup: (props: RadioGroupProps) => react_jsx_runtime.JSX.Element;

interface RadioButtonProps extends RadioProps {
}
declare const RadioButton: (props: RadioButtonProps) => react_jsx_runtime.JSX.Element;

interface CheckBoxGroupData {
    label?: string;
    value: string;
    disabled?: boolean;
    selected?: any;
}
interface CheckBoxGroupProps {
    data: CheckBoxGroupData[];
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    selected: string[];
    title?: string;
    isRow?: boolean;
}
declare const BaseCheckbox: (props: CheckBoxGroupProps) => react_jsx_runtime.JSX.Element;

interface CheckboxButtonProps {
    value?: any;
    disabled?: boolean;
    selected?: any;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    disableColor?: string;
}
declare const CheckboxButton: (props: CheckboxButtonProps) => react_jsx_runtime.JSX.Element;

interface TabsData {
    label: string;
    value: string | number;
}
interface TabsProps extends TabsProps$1 {
    data: TabsData[];
}
declare const Tabs: (props: TabsProps) => react_jsx_runtime.JSX.Element;

interface DropdownProps {
    titleLabel?: string;
    data?: any;
    height?: string | number;
    width?: string | number;
    tag?: any;
    bdOnChange?: (value: any, tag: any) => void;
    titleProps?: TypographyProps;
}
declare const BaseDropdown: (props: SelectProps & DropdownProps) => react_jsx_runtime.JSX.Element;

interface MultipleSelectProps {
    list?: any;
    onChange?: (value: any, tag: any) => void;
    tag?: string;
    width?: string;
    height?: string;
    titleLabel?: string;
    titleProps?: TypographyProps;
    placeholder?: string;
    headerListbox?: React.ReactNode;
    selectedValue?: any;
    disabled?: boolean;
    noOptionsText?: string;
}
declare const MultipleSelect: (props: MultipleSelectProps) => react_jsx_runtime.JSX.Element;

declare const ROW_CELL_TYPE_BASE = "base";
declare const ROW_CELL_TYPE_CUSTOM = "custom";
type DefaultDataType = Record<PropertyKey, any>;
type TableBodyRowCellType<DataType extends DefaultDataType = DefaultDataType> = {
    cellProps?: TableCellProps;
} & ({
    type: typeof ROW_CELL_TYPE_CUSTOM;
    cellContent: FC<Record<string, any> & {
        data: DataType;
        rowIndex: number;
        columnIndex: number;
    }>;
} | {
    type?: typeof ROW_CELL_TYPE_BASE;
});
type ColumnType<DataType extends DefaultDataType = DefaultDataType> = {
    key: string;
    bodyRowCell?: TableBodyRowCellType<DataType>;
    cellContent: ReactNode;
    cellProps?: TableCellProps;
};
type BaseTableProps<DataType extends DefaultDataType = DefaultDataType> = {
    className?: string;
    rows: DataType[];
    columns: ColumnType<DataType>[];
    containerProps?: TableContainerProps;
    tableProps?: TableProps;
    headProps?: TableHeadProps;
    headRowProps?: TableRowProps;
    bodyProps?: TableBodyProps;
    bodyRowProps?: TableRowProps;
    rowKeyName?: keyof DataType;
    emptyContent?: ReactNode;
};

declare const BaseTable: <DataType extends DefaultDataType = DefaultDataType>(props: BaseTableProps<DataType>) => react_jsx_runtime.JSX.Element;

declare const TablePagination: FC<TablePaginationProps>;

interface HeadingProps {
    text: string;
    color?: string;
}
declare const H1: (props: HeadingProps) => react_jsx_runtime.JSX.Element;
declare const H2: (props: HeadingProps) => react_jsx_runtime.JSX.Element;
declare const H3: (props: HeadingProps) => react_jsx_runtime.JSX.Element;
declare const H4: (props: HeadingProps) => react_jsx_runtime.JSX.Element;
declare const H5: (props: HeadingProps) => react_jsx_runtime.JSX.Element;
declare const H6: (props: HeadingProps) => react_jsx_runtime.JSX.Element;

interface ParagraphProps {
    text: string;
    color?: string;
}
declare const P1: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;
declare const P2: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;
declare const Lead1: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;
declare const Lead2: (props: ParagraphProps) => react_jsx_runtime.JSX.Element;

interface SmallProps {
    text: string;
    color?: string;
}
declare const Mini: (props: SmallProps) => react_jsx_runtime.JSX.Element;
declare const Tiny: (props: SmallProps) => react_jsx_runtime.JSX.Element;

interface BaseTextFieldProps {
    bdSize?: string;
    width?: string | number;
    titleLabel?: string;
    value?: string;
    limit?: number;
    tag?: any;
    bdOnChange?: (value: string, tag?: string) => void;
    icon?: React.ReactNode;
    onClickIcon?: () => void;
    titleProps?: TypographyProps;
}
declare const BaseTextField: (props: BaseTextFieldProps & TextFieldProps) => react_jsx_runtime.JSX.Element;

declare const Colors: {
    success: string;
    warning: string;
    error: string;
    completed: string;
    pending: string;
    trinary001: string;
    trinary002: string;
    trinary003: string;
    trinary004: string;
    trinary005: string;
    secondary001: string;
    secondary002: string;
    secondary003: string;
    secondary004: string;
    secondary005: string;
    primary001: string;
    primary002: string;
    primary003: string;
    primary004: string;
    primary005: string;
    gray0: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    gray5: string;
    gray6: string;
    gray7: string;
    black: string;
    white: string;
};

declare const Layout: (props: any) => react_jsx_runtime.JSX.Element;

export { Layout as AdminLayout, Button, CheckboxButton, BaseCheckbox as CheckboxGroup, Colors, ConfirmChangeDialog, ConfirmDiscardDialog, Dialog, Drawer, type DrawerProps, BaseDropdown as Dropdown, ErrorDialog, H1, H2, H3, H4, H5, H6, type HeadingProps, InfoDialog, Lead1, Lead2, Mini, MultipleSelect, OutlinedBtn as OutlinedButton, P1, P2, type ParagraphProps, type Position, PrimaryBtn as PrimaryButton, RadioButton, RadioGroup, RemoveBtn as RemoveButton, SecondaryBtn as SecondaryButton, SideMenu, type SmallProps, Switch, SwitchLabel, BaseTable as Table, TablePagination, Tabs, BaseTextField as TextField, Tiny };
