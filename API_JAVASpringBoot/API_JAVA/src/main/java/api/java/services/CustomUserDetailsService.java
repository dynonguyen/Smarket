package api.java.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import api.java.constants.AppConstants;
import api.java.entities.Account;
import api.java.repositories.AccountRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            Account account = accountRepository.findByUsername(username);

            if (account != null) {
                String password = account.getPassword();
                int accountType = account.getAccountType();
                String role = AppConstants.USER_TYPES.getRole(accountType);

                List<GrantedAuthority> grantedAuthorities = new ArrayList<>();
                grantedAuthorities.add(new SimpleGrantedAuthority(role));

                return new User(username, password, grantedAuthorities);
            }

            return new User("", "", new ArrayList<>());
        } catch (Exception e) {
            System.out.println("LOAD USER BY USERNAME ERROR: " + e.toString());
            return new User("", "", new ArrayList<>());
        }

    }
}
