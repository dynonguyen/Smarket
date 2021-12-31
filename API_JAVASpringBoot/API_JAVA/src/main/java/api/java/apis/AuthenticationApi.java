package api.java.apis;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.java.dto.AuthResponseDto;
import api.java.repositories.AccountRepository;
import api.java.services.AuthenticationService;

@RestController
@RequestMapping(path = "/api/auth")
public class AuthenticationApi {
    @Autowired
    AccountRepository accountRepository;

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping(path = "/login")
    public ResponseEntity<AuthResponseDto> postLogin(@RequestBody Map<String, Object> payload) {
        String username = (String) payload.get("username");
        String password = (String) payload.get("password");

        if (username == "" || password == "") {
            return new ResponseEntity<>(new AuthResponseDto("Vui lòng nhập đầy đủ username và mật khẩu"),
                    HttpStatus.BAD_REQUEST);
        }

        return authenticationService.loginService(username, password);
    }
}