package api.java.services;

import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import api.java.constants.AppConstants;
import api.java.dto.AuthResponseDto;
import api.java.entities.Account;
import api.java.repositories.AccountRepository;
import api.java.utils.JwtUtil;

@Service("authenticationService")
@Transactional
public class AuthenticationServiceImpl implements AuthenticationService {
    @Autowired
    AccountRepository accountRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService cUserDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public ResponseEntity<AuthResponseDto> loginService(String username, String password) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password));
        } catch (Exception e) {
            System.out.println("LOGIN SERVICE ERROR: " + e.toString());
            return new ResponseEntity<>(new AuthResponseDto("Tài khoản hoặc mật khẩu không đúng"),
                    HttpStatus.UNAUTHORIZED);
        }

        final UserDetails userDetails = cUserDetailsService.loadUserByUsername(username);
        final String jwtToken = AppConstants.JWT_STARTS_WITH + jwtUtil.generateToken(userDetails);

        String role = "ROLE_GUEST";
        for (GrantedAuthority auth : userDetails.getAuthorities()) {
            role = auth.getAuthority();
        }

        long expired = System.currentTimeMillis() + AppConstants.JWT_EXP;
        return new ResponseEntity<>(new AuthResponseDto(jwtToken, username, role, expired, "Successfully"),
                HttpStatus.OK);
    }

    @Override
    public ResponseEntity<AuthResponseDto> authorizationWithJwt(String jwt) {
        boolean isExpired = jwtUtil.isTokenExpired(jwt);
        if (isExpired) {
            return new ResponseEntity<>(new AuthResponseDto("Jwt is expired"), HttpStatus.UNAUTHORIZED);
        }

        String username = jwtUtil.extractUsername(jwt);
        if (username == null) {
            return new ResponseEntity<>(new AuthResponseDto("Failed"), HttpStatus.UNAUTHORIZED);
        }

        try {
            Account account = accountRepository.findByUsername(username);
            if (account == null) {
                return new ResponseEntity<>(new AuthResponseDto("Failed"), HttpStatus.UNAUTHORIZED);
            }

            String role = AppConstants.USER_TYPES.getRole(account.getAccountType());
            Date expiration = jwtUtil.extractExpiration(jwt);
            long expired = expiration.getTime();

            return new ResponseEntity<>(new AuthResponseDto(jwt, username, role, expired, ""), HttpStatus.OK);

        } catch (Exception e) {
            System.out.println("AUTHORIZATION ERROR: " + e.toString());
            return new ResponseEntity<>(new AuthResponseDto("Failed"), HttpStatus.UNAUTHORIZED);
        }
    }
}