import * as react_jsx_runtime from 'react/jsx-runtime';
import { ButtonProps as ButtonProps$1, SwitchProps as SwitchProps$1, DialogProps as DialogProps$1, TabsProps as TabsProps$1, SelectProps, TextFieldProps } from '@mui/material';
import React$1, { ChangeEvent, ReactNode } from 'react';
import { DataGridProps } from '@mui/x-data-grid';
import { SxProps, Theme } from '@mui/material/styles';

interface ButtonProps extends ButtonProps$1 {
    bdType?: "primary" | "secondary" | "outlined" | "remove";
    bdSize?: string;
    icon?: JSX.Element;
    text?: string;
    loading?: boolean;
    width?: string;
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
}
declare const RadioGroup: (props: RadioGroupProps) => react_jsx_runtime.JSX.Element;

interface CheckBoxGroupData {
    label?: string;
    value: string;
    disabled?: boolean;
}
interface CheckBoxGroupProps {
    data: CheckBoxGroupData[];
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    selected: string[];
    title?: string;
    isRow?: boolean;
}
declare const BaseCheckbox: (props: CheckBoxGroupProps) => react_jsx_runtime.JSX.Element;

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
    onChange?: (value: any, tag: any) => void;
}
declare const BaseDropdown: (props: DropdownProps & SelectProps) => react_jsx_runtime.JSX.Element;

type TableFooterProps = {
    sx?: SxProps<Theme>;
    limit?: number;
    offset?: number;
    total?: number;
    onPageChange?: (event: React.ChangeEvent<unknown>, newPage: number) => void;
};

type TableNoRowsOverlayProps = {
    title?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
};

type TableDataGridProps = {
    tableFooterProps?: TableFooterProps;
    tableHeight?: number | string;
    borderRadiusValue?: number;
    tableNoRowsOverlayProps?: TableNoRowsOverlayProps;
} & DataGridProps;
declare const TableDataGrid: (props: TableDataGridProps) => react_jsx_runtime.JSX.Element;

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
}
declare const BaseTextField: (props: BaseTextFieldProps & TextFieldProps) => react_jsx_runtime.JSX.Element;

declare const black = "#000000";
declare const white = "#FFFFFF";
declare const gray1 = "#F3F6F9";
declare const gray2 = "#EAEEF6";
declare const gray3 = "#C3CAD4";
declare const gray4 = "#939CA9";
declare const gray5 = "#4A5568";
declare const gray6 = "#323A43";
declare const gray7 = "#747B84";
declare const primary001 = "#1E6AF6";
declare const primary002 = "#4B88F8";
declare const primary003 = "#78A6FA";
declare const primary004 = "#A5C3FB";
declare const primary005 = "#E8F0FE";
declare const secondary001 = "#07236D";
declare const secondary002 = "#264189";
declare const secondary003 = "#455FA5";
declare const secondary004 = "#849CDD";
declare const secondary005 = "#A3BAF9";
declare const trinary001 = "#EE6E3A";
declare const trinary002 = "#F18B61";
declare const trinary003 = "#F5A889";
declare const trinary004 = "#F8C5B0";
declare const trinary005 = "#FAD3C4";
declare const success = "#13C186";
declare const warning = "#EFB110";
declare const error = "#EA5540";
declare const completed = "#1E6AF6";
declare const pending = "#F9A01B";
declare const electricBlue = "#003CDE";

declare const Layout: (props: any) => react_jsx_runtime.JSX.Element;

export { Layout as AdminLayout, Button, BaseCheckbox as CheckboxGroup, ConfirmChangeDialog, ConfirmDiscardDialog, Dialog, Drawer, type DrawerProps, BaseDropdown as Dropdown, ErrorDialog, H1, H2, H3, H4, H5, H6, type HeadingProps, InfoDialog, Lead1, Lead2, Mini, OutlinedBtn as OutlinedButton, P1, P2, type ParagraphProps, type Position, PrimaryBtn as PrimaryButton, RadioGroup, RemoveBtn as RemoveButton, SecondaryBtn as SecondaryButton, SideMenu, type SmallProps, Switch, SwitchLabel, TableDataGrid as Table, Tabs, BaseTextField as TextField, Tiny, black, completed, electricBlue, error, gray1, gray2, gray3, gray4, gray5, gray6, gray7, pending, primary001, primary002, primary003, primary004, primary005, secondary001, secondary002, secondary003, secondary004, secondary005, success, trinary001, trinary002, trinary003, trinary004, trinary005, warning, white };
