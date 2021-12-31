package api.java.services;

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

        return new ResponseEntity<>(new AuthResponseDto(jwtToken, username, role, "Successfully"), HttpStatus.OK);
    }
}