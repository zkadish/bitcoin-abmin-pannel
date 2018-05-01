import React from 'react';

import SvgIcon from '../FontAweIcon';

import './chat.scss';

const Chat = () => (
  <section className="ez-chat">
    <header className="ez-chat__header">
      <SvgIcon
        type="far"
        name="fa-comment-alt"
        size="fa-2x"
      />
      Chat
    </header>
  </section>
);

export default Chat;
