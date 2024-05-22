import { Meta } from '@storybook/react';
import { Table } from '../../components/table';
import { BASE_TABLE_PROPS } from './data';

export const SampleTable = () => {
  return (
    <Table
      {...BASE_TABLE_PROPS}
    />
  );
};

export default {
  title: "Sample/Table",
  component: SampleTable
} as Meta<typeof SampleTable>
