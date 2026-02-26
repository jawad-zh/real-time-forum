package handlers

import (
	"encoding/json"
	"fmt"
	"golang/backend/services"
	"net/http"
)

func GetCommentHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		fmt.Println("method not allowed")
		return
	}
	_,data:=services.GetComment(r)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data)
}
