import { useEffect, useState } from 'react'
import { Meta } from '@storybook/react'
import { TablePagination } from "../../components/table/TablePagination"
import { Table } from '../../components/table'
import { BASE_TABLE_PROPS, DataType } from './data'
import { Box, Stack } from '@mui/material'
import { Lead1 } from '../../components'

const LIMIT = 8

const fetchDataSync = (params: { offset: number; limit: number }) => {
  return {
    items: BASE_TABLE_PROPS.rows.slice(params.offset, params.offset + params.limit),
    total: BASE_TABLE_PROPS.rows.length,
  }
}

export const SampleTable = () => {
  const [data, setData] = useState<{ items: DataType[]; total: number }>({
    items: [],
    total: 0,
  })
  const [offset, setOffset] = useState(0)

  const page = Math.floor(offset / LIMIT)

  const onPageChange = (newPage: number) => {
    setOffset(Math.min(data.total, LIMIT * newPage))
  }

  useEffect(() => {
    const resp = fetchDataSync({ offset, limit: LIMIT })
    setData(resp)
  }, [offset])

  return (
    <Box overflow="hidden">
      <Stack spacing={6}>
        <Stack spacing={2}>
          <Lead1 text="Table" />
          <Table
            {...BASE_TABLE_PROPS}
            rows={data.items}
          />
          <TablePagination
            count={data.total}
            page={page}
            rowsPerPage={LIMIT}
            onPageChange={(e, v) => onPageChange(v)}
          />
        </Stack>
        <Stack spacing={2}>
          <Lead1 text="Table - Empty" />
          <Table
            {...BASE_TABLE_PROPS}
            rows={[]}
          />
          <TablePagination
            count={0}
            page={0}
            rowsPerPage={LIMIT}
            onPageChange={() => {}}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default {
  title: "Sample/Table",
  component: SampleTable
} as Meta<typeof SampleTable>
