package services

import (
	"crypto/rand"
	"encoding/hex"
	"time"

	"golang/backend/models"
	"golang/backend/repos"
)

func CreatSession(user *models.Users) (error,string){
	sessionID := GenereatSessionId()
	session := models.Session{
		UserID: user.UserID,
		Token: sessionID,
		ExpiresAt: time.Now().Add(24 *time.Hour),
	}
	err:=repos.SetSession(&session,user)
	if err != nil{
		return err , ""
	}
	return nil ,session.Token
}

func GenereatSessionId() string {
	bytes := make([]byte, 32)
	rand.Read(bytes)
	return hex.EncodeToString(bytes)
}
