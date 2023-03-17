import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.request;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  // Функція перетворювач
  (contacts, filter) => {
    return contacts.filter(element =>
      element.name.toUpperCase().includes(filter.toUpperCase())
    );
  }
);
