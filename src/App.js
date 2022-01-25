import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Root,
  Sidebar,
  Content,
  CollapseBtn,
  CollapseIcon,
} from '@mui-treasury/layout';
import fixedLayoutPreset from '@mui-treasury/layout/presets/fixed';

import NavContent from './components/NavContent';
import NavHeader from './components/NavHeader';

import cvData from './assets/cv.json';
import Main from './components/Main';

function App() {
  return (
    <Root config={fixedLayoutPreset}>
      {({ sidebarStyles }) => (
        <>
          <CssBaseline />
          <Content>
            <Main data={cvData} />
          </Content>
          <Sidebar style={{ backgroundColor: '#fafafa' }}>
            {({ collapsed }) => (
              <>
                <NavHeader
                  style={{ overflowX: 'hidden' }}
                  data={{ profile: cvData.cv.profile, collapsed: collapsed }}
                />
                <nav
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'inherit',
                  }}
                >
                  <div className={sidebarStyles.container}>
                    <NavContent
                      style={{ overflowX: 'hidden' }}
                      data={{ collapsed: collapsed }}
                    />
                  </div>
                  <CollapseBtn
                    className={sidebarStyles.collapseBtn}
                    aria-label="Sidebar menu collapse button."
                  >
                    <CollapseIcon />
                  </CollapseBtn>
                </nav>
              </>
            )}
          </Sidebar>
        </>
      )}
    </Root>
  );
}

export default App;
