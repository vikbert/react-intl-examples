import React, {useEffect} from 'react';
import './App.css';

import {injectIntl} from 'react-intl';
import Translations from './Translations';

function App({intl}) {
  return (
    <>
      <h1>{intl.formatMessage({id: 'home.title'})}</h1>
      <Translations/>
    </>
  );
}

export default injectIntl(App);
