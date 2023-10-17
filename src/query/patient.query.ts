export const QUERY = {
    SELECT_PATIENTS: 'SELECT * FROM patiens ORDER BY created_at DESC LIMIT 50',
    SELECT_PATIENT: 'SELECT * FROM WHERE id = ?',
    CREATE_PATIENT: 'INSERT INTO patiens (first_name, last_name, email, address, diagnosis, phone, status, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)',
    UPDATE_PATIENT: 'UPDATE patiens SET first_name = ?, last_name = ?, email = ?, address = ?, diagnosis = ?, phone = ?, status = ?, image_url = ? WHERE id = ?',
    DELETE_PATIENT: 'DELETE FROM patiens WHERE id = ?'
};