import { Tabs as MuiTabs, TabsProps as MuiTabProps, Tab, Box } from '@mui/material'

interface TabsData {
  label: string
  value: string | number
}

interface TabsProps extends MuiTabProps {
  data: TabsData[]
}

const Tabs = (props: TabsProps) => {
  const { value, onChange, data } = props

  const tabs = data.map(({ value, label }, index) => <Tab key={index} value={value} label={label} />)

  return (
    <Box width="100%">
      <MuiTabs value={value} onChange={onChange}>
        {tabs}
      </MuiTabs>
    </Box>
  )
}

export default Tabs
