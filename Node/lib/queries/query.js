module.exports = {
    login :  'SELECT Password FROM users WHERE UserName = ?',
    register : 'INSERT INTO users (UserName, MailId, Password) VALUES (?,?,?)',
    getStudents : 'SELECT * FROM students_data',
    addStudents : 'INSERT INTO students_data (Name, Sex, DOB, Mobile) VALUES (?,?,?,?)'
}