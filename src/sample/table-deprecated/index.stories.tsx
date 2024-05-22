import { Box, Grid } from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'
import { Meta } from '@storybook/react'
import { Table } from '../../components/table-deprecated'
import { columns, rows } from './data'
import { ColumnBox } from '../layout'

export const SampleTable = () => {
  const [page, setPage] = useState<number>(1)
  const [data, setData] = useState(rows)

  useEffect(() => {
    const offset = (page - 1) * limit
    setData(rows.slice(offset, offset + limit))
  }, [page])

  const limit = 10

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item>
          <ColumnBox title="With data">
            <Table 
              columns={columns} 
              rows={data}
              tableFooterProps={{
                limit,
                offset: (page - 1) * limit,
                total: rows.length,
                onPageChange: (_event: ChangeEvent<unknown>, newPage: number) => setPage(newPage),
              }}
            />
          </ColumnBox>
        </Grid>
        <Grid item>
          <ColumnBox title="Without data">
            <Table 
              columns={columns} 
              rows={[]}
              tableFooterProps={{
                limit,
                offset: 0,
                total: 0,
              }}
            />
          </ColumnBox>
        </Grid>
      </Grid>
    </Box>
  )
}

export default {
  title: "Sample/Table_Deprecated",
  component: SampleTable
} as Meta<typeof SampleTable>
