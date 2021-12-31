package api.java.services;

import org.springframework.http.ResponseEntity;

import api.java.dto.AuthResponseDto;

public interface AuthenticationService {
    public ResponseEntity<AuthResponseDto> loginService(String username, String password);

    public ResponseEntity<AuthResponseDto> authorizationWithJwt(String jwt);
}