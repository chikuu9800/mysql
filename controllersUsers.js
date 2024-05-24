import connection from "./db.js";

const showfunction = async (req, res) => {
    const ans = await connection.query('SELECT * FROM users')
        .catch(err => { console.log(err); })
    res.send(ans[0])
}
const addfunction = async (req, res) => {


    const name = req.body.name
    const email = req.body.email
    const mobile = req.body.mobile



    const ans = await connection.query(`INSERT INTO users ( name , email ) VALUES (?,?,?)  `, [name, email, mobile])

        .catch(err => { console.log(err); })
    // res.send(console.log(req.body) )

    // res.send(console.log('sucsses'))
}
const showbyid = async (req, res) => {

    const ans = await connection.query("SELECT name ,email FROM users WHERE email=?", [req.params.email])
        .catch(err => { console.log(err); })
    res.send(ans[0])
}

const deletefunction = async (req, res) => {
    const email = req.params.email
    res.send(console.log(email))
    const ans = await connection.query("DELETE FROM users WHERE email=?", [email])
}

const updatefunction = async (req, res) => {

    const name = req.body.name
    // const querytwo = `UPDATE \`product_info\` SET \`productId\`='${productId}', \`productName\`='${productName}', \`CategoryName\`='${CategoryName}', \`CategoryId\`='${CategoryId}' WHERE id = 2`
    const query = "UPDATE users SET name = ?, WHERE email = ?"
    const ans = await connection.query(query, [name, req.params.email])
    // const ans = await connection.query(querytwo)
    // res.send(console.log(query,querytwo))


}


export { showfunction, addfunction, deletefunction, showbyid, updatefunction };