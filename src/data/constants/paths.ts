// ** Paths ** //
const base: string = 'https://monkfish-app-z9uza.ondigitalocean.app/bcard2';
const users = base + '/users';
const cards = base + '/cards';

export const paths = {
    cards: cards,
    users: users,

    login: `${users}/login`,
};
