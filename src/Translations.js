import React from 'react';
import {FormattedMessage} from 'react-intl';

const Translations = () => {
  return (
    <>
      <p>
        <FormattedMessage
          id="demo.placeholder_and_bold_text"
          values={{
            placeholder: 'bolder text',
            styled: (message) => <strong>{message}</strong>,
          }}
        />
      </p>

      <p>
        <FormattedMessage
          id="demo.placeholder_and_colored_text"
          values={{
            placeholder: 'colored text',
            styled: (message) => <span className={'styled'}>{message}</span>,
          }}
        />
      </p>

      <p>
        <FormattedMessage
          id="demo.placeholder_and_link"
          values={{
            placeholder: 'text with link',
            linked: (message) => <a target='_blank' href={'http://www.google.de'}>{message}</a>,
          }}
        />
      </p>
    </>
  );
};

export default Translations;
