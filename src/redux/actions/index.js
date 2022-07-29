// Coloque aqui suas actions
export const NEW_USER = 'NEW_USER';

export const addUser = (email) => ({
  type: NEW_USER,
  email,
});
