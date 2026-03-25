package middleware

import "net/http"

func GetUserFromContext(r *http.Request) (MiddlewareInfoFormat, bool) {
	user, ok := r.Context().Value(Contextkey).(MiddlewareInfoFormat)
	return user, ok
}