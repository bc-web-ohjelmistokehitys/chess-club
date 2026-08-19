import { resetDB } from '../config/database.js';

try {
    await resetDB();
    console.log('Tietokanta palautettu oletusarvoihin.');
} catch (err) {
    console.error('Tietokannan palautus epäonnistui:', err);
    process.exit(1);
}
