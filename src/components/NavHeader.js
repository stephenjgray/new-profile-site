import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import avatarImage from '../assets/steve.png';

const NavHeader = (props) => {
  console.log(props);
  return (
    <header>
      <div
        style={{
          padding: props.data.collapsed ? 8 : 16,
          transition: '0.3s',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Avatar
          align="center"
          src={avatarImage}
          alt={`Image of ${props.data.profile.firstName}.`}
          style={{
            width: props.data.collapsed ? 48 : 174,
            height: props.data.collapsed ? 48 : 174,
            transition: '0.3s',
            alignSelf: 'center',
          }}
        />
        <div style={{ paddingBottom: 16 }} />

        <Typography
          variant={'h6'}
          component={'h1'}
          align="center"
          style={{ display: props.data.collapsed ? 'none' : 'block' }}
          noWrap
        >
          {props.data.profile.name}
        </Typography>
        <Typography
          color={'textSecondary'}
          align="center"
          style={{ display: props.data.collapsed ? 'none' : 'block' }}
          noWrap
          gutterBottom
        >
          {props.data.profile.jobTitle}
        </Typography>
      </div>
      <Divider />
    </header>
  );
};

NavHeader.propTypes = {
  collapsed: PropTypes.bool,
};
NavHeader.defaultProps = {
  collapsed: false,
};

export default NavHeader;
