import connection from "./db.js";

const showfunction = async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT * FROM users');
        res.send(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching users');
    }
};

const addfunction = async (req, res) => {
    const { name, email } = req.body;

    try {
        const result = await connection.query(`INSERT INTO users (name, email) VALUES (?, ?)`, [name, email]);
        res.send('User added successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding user');
    }
};

const showbyid = async (req, res) => {
    try {
        const [rows] = await connection.query("SELECT name, email FROM users WHERE email=?", [req.params.email]);
        res.send(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching user by email');
    }
};

const deletefunction = async (req, res) => {
    const email = req.params.email;

    try {
        await connection.query("DELETE FROM users WHERE email=?", [email]);
        res.send('User deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting user');
    }
};

const updatefunction = async (req, res) => {
    const { name } = req.body;
    const { email } = req.params;

    try {
        await connection.query("UPDATE users SET name = ? WHERE email = ?", [name, email]);
        res.send('User updated successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating user');
    }
};

export { showfunction, addfunction, deletefunction, showbyid, updatefunction };
