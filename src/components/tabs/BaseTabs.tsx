import { Tabs as MuiTabs, TabsProps as MuiTabsProps, Tab, TabProps as MuiTabProps, Box } from '@mui/material'

interface TabsData {
  label: string
  value: string | number
}

interface TabsProps extends MuiTabsProps {
  data: TabsData[]
  tabProps?: MuiTabProps
}

const Tabs = (props: TabsProps) => {
  const { value, onChange, data, tabProps } = props

  const tabs = data.map(({ value, label }, index) => (
    <Tab key={index} value={value} label={label} sx={{ textTransform: 'none', fontWeight: 600 }} {...tabProps} />
  ))

  return (
    <Box width="100%">
      <MuiTabs
        {...props}
        value={value}
        onChange={onChange}
        TabIndicatorProps={{
          sx: {
            height: 4,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            mb: 1,
          },
        }}
      >
        {tabs}
      </MuiTabs>
    </Box>
  )
}

export default Tabs
