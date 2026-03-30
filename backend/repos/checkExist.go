package repos

import "golang/backend/db"

func CheckExist(PostID int) error {
	_,err:= db.DataBase.Exec(`
	SELECT * FROM Posts WHERE PostID = ?
	`,PostID)
	if err != nil{
		return err
	}
	return nil
}
func CheckUserExist(UserID int) error{
	_,err:= db.DataBase.Exec(`
	SELECT * FROM Users WHERE UserID = ?
	`,UserID)
	if err != nil{
		return err
	}
	return nil
}