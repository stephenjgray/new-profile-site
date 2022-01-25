import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MuiListItemIcon from '@material-ui/core/ListItemIcon';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-scroll';

const ListItemIcon = withStyles({
  root: {
    minWidth: 34,
  },
})(MuiListItemIcon);

const ListItem = withStyles({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
  },
})(MuiListItem);

const list = [
  {
    primaryText: 'Home',
    icon: 'home',
    linkTo: 'home',
  },
  {
    primaryText: 'About',
    icon: 'person',
    linkTo: 'about',
  },
  {
    primaryText: 'Skills',
    icon: 'star',
    linkTo: 'skills',
  },
  {
    primaryText: 'Experience',
    icon: 'work',
    linkTo: 'experience',
  },
  // {
  //   primaryText: 'Projects',
  //   icon: 'computer',
  //   linkTo: 'projects',
  // },
  {
    primaryText: 'Education',
    icon: 'school',
    linkTo: 'education',
  },
  {
    primaryText: 'Contact',
    icon: 'chat_bubble',
    linkTo: 'contact',
  },
];

const NavContent = (props) => {
  const [activeItem, setActiveItem] = useState('home');

  const handleSetActiveItem = function (item) {
    setActiveItem(item);
  };

  return (
    <>
      <List>
        {list.map(({ primaryText, icon, linkTo }, i) => (
          <li key={primaryText}>
            <Link
              activeClass="active"
              key={primaryText}
              to={linkTo}
              offset={0}
              duration={500}
              spy={true}
              smooth={true}
              delay={50}
              isDynamic={true}
              onSetActive={handleSetActiveItem}
            >
              <ListItem selected={linkTo === activeItem} button>
                <ListItemIcon>
                  <Icon
                    fontSize="small"
                    style={{
                      width: props.data.collapsed ? 48 : 34,
                      fontSize: props.data.collapsed ? '2rem' : '1.25rem',
                    }}
                  >
                    {icon}
                  </Icon>
                </ListItemIcon>
                <Typography variant={'overline'}>
                  <ListItemText
                    disableTypography={true}
                    primary={primaryText}
                    primaryTypographyProps={{ noWrap: true }}
                  />
                </Typography>
              </ListItem>
            </Link>
          </li>
        ))}
      </List>
    </>
  );
};

NavContent.propTypes = {};
NavContent.defaultProps = {};

export default NavContent;
