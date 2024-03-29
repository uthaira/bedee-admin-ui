import { Box, Typography } from '@mui/material'
import { Meta } from '@storybook/react'
import { Tabs } from '../../components'
import { useState } from 'react'

export const SampleTabs = () => {
  const TabsItems = [
    { label: 'Tab One', value: 1 },
    { label: 'Tab Two', value: 2 },
    { label: 'Tab Three', value: 3 },
  ]

  const [selected, setSelected] = useState<string | number>(1)

  const onSelectChange = (event: React.SyntheticEvent, value: string | number) => {
    setSelected(value)
  }

  const displayTab = () => {
    const selectedTab = TabsItems.find((tab) => tab.value === selected)
    return (
      selectedTab && (
        <Box padding={8}>
          <Typography>{'TAB ' + selected}</Typography>
        </Box>
      )
    )
  }

  return (
    <>
      <Typography>Tabs</Typography>
      <Tabs data={TabsItems} value={selected} onChange={onSelectChange} />
      {displayTab()}
    </>
  )
}

export default {
  title: 'Sample/Tabs',
  component: SampleTabs,
} as Meta<typeof SampleTabs>
