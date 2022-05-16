import React from 'react';

const NotFound = ({ message = 'Tidak ada catatan' }) => (<p className="notes-list__empty-message">{message}</p>);

export default NotFound;
