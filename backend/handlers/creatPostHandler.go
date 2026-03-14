package handlers

import (
	"encoding/json"
	"net/http"
	"golang/backend/middleware"
	"golang/backend/services"
	"fmt"
)
// weeeee neeeeeeeed stusssss
func CreatPostHandler(w http.ResponseWriter, r *http.Request) {
		user, ok := middleware.GetUserFromContext(r)
		if !ok{
			fmt.Println(" middlewar Get comment info error from creatcommentHandler")
			return
		}
	_, _, data := services.CreatPostCheck(r,user)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data)
}
