import React from 'react'
import {
  Typography,
  Divider,
  List
} from '@material-ui/core'
import ArrowIcon from '@material-ui/icons/ArrowRightAlt'
import {makeStyles} from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'


const useIconStyles = makeStyles(theme => ({
  icon: {
    height: 2 * theme.typography.fontSize,
    width: 2 * theme.typography.fontSize,
    verticalAlign: "middle",
    color: theme.palette.text.secondary
  },
  floatRight: {
    float: "right"
  },
  fromToItem: {
    lineHeight: 0
  }
}));


const DateItem = ({date}) => {
  const dateFormatted = (new Date(date)).toLocaleString()
  return (
    <Typography variant="overline" color="textPrimary">
      {dateFormatted}
    </Typography>
  )
}

const FromToItem = ({from, to}) => {
  const classes = useIconStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <div className={matches ? classes.floatRight : null}>
      <Typography 
        color="textSecondary" 
        variant="overline" 
        component="span"
        className={classes.fromToItem}
      >
        {from.name} <ArrowIcon className={classes.icon} /> {to.name}
      </Typography>
    </div>
  )
}

const TitleItem = ({title}) => (
  <Typography variant="body1" >
    {title}
  </Typography>
)


export default ({
    categoryName, 
    messages
}) => (
  <React.Fragment>
    <Typography variant="h4" component="h2">
      {categoryName}
    </Typography>
    <List>
    {
      (messages.length)
      ? messages.map(
          ({id, date, from, to, title}, index) => (
            <React.Fragment key={id}>
              { index ? null : <Divider /> }
              <FromToItem from={from} to={to} />
              <DateItem date={date} />
              <TitleItem title={title} />
              <Divider />
            </React.Fragment>
          )
        )
      : <Typography variant="body1">No items in this category.</Typography>
    }
    </List>
  </React.Fragment>
)