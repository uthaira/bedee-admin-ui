import { useEffect, useState } from 'react'
import { Meta } from '@storybook/react'
import { TablePagination } from "../../components/table/TablePagination"
import { Table } from '../../components/table'
import { BASE_TABLE_PROPS, Datatype } from './data'
import { Box, Stack } from '@mui/material'

const LIMIT = 8

const fetchDataSync = (params: { offset: number; limit: number }) => {
  return {
    items: BASE_TABLE_PROPS.rows.slice(params.offset, params.offset + params.limit),
    total: BASE_TABLE_PROPS.rows.length,
  }
}

export const SampleTable = () => {
  const [data, setData] = useState<{ items: Datatype[]; total: number }>({
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
    <Box maxWidth={700} overflow="hidden">
      <Stack spacing={2}>
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
    </Box>
  )
}

export default {
  title: "Sample/Table",
  component: SampleTable
} as Meta<typeof SampleTable>
