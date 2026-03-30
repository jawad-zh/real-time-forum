package handlers

import (
	"encoding/json"
	"net/http"
	"strings"

	"golang/backend/middleware"
	"golang/backend/services"
)

type commentInfoFormat struct {
	PostID         int    `json:"PostID"`
	CommentContent string `json:"commentValue"`
}

type CreateCommentResponse struct {
	Status  string `json:"status"`
	Message string `json:"message"`
	Data    any    `json:"commentData,omitempty"`
}

func CreatCommentHandler(w http.ResponseWriter, r *http.Request) {
	// Only allow POST requests
	if r.Method != http.MethodPost {
		services.Api(w, nil, http.StatusMethodNotAllowed)
		return
	}

	var commentInfo commentInfoFormat
	var res CreateCommentResponse

	// Get authenticated user
	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		res.Status = "failed"
		res.Message = "unauthorized"
		services.Api(w, res, http.StatusUnauthorized)
		return
	}

	// Decode JSON body
	if err := json.NewDecoder(r.Body).Decode(&commentInfo); err != nil {
		res.Status = "failed"
		res.Message = "invalid request body"
		services.Api(w, res, http.StatusBadRequest)
		return
	}

	// Trim whitespace and check for empty comment
	commentInfo.CommentContent = strings.TrimSpace(commentInfo.CommentContent)
	if commentInfo.CommentContent == "" {
		res.Status = "failed"
		res.Message = "comment cannot be empty"
		services.Api(w, res, http.StatusBadRequest)
		return
	}

	// Check comment business logic (length, forbidden words, etc.)
	err, message, statusCode := services.CommentCheck(user, commentInfo.PostID, commentInfo.CommentContent)
	if err != nil {
		res.Status = "failed"
		res.Message = message
		services.Api(w, res, statusCode)
		return
	}

	// Success: send back created comment info
	res.Status = "success"
	res.Message = "comment created successfully"
	res.Data = commentInfo 

	services.Api(w, res, http.StatusOK)
}