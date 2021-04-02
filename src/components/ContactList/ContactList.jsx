import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactItem from '../ContactItem';
import styles from './ContactList.module.scss';
class ContactList extends Component {
  render() {
    const { onVisibleFilter, onDeleteContact } = this.props;
    return (
      <ul className={styles.ContactList}>
        {onVisibleFilter.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteItem={onDeleteContact}
            />
          );
        })}
      </ul>
    );
  }
}

ContactList.defaultProps = {
  onVisibleFilter: [],
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  onVisibleFilter: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default ContactList;
