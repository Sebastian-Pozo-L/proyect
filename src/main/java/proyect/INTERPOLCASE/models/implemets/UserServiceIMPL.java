package proyect.INTERPOLCASE.models.implemets;

import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import proyect.INTERPOLCASE.models.dto.RegisterUserDTO;
import proyect.INTERPOLCASE.models.entity.RolModel;
import proyect.INTERPOLCASE.models.entity.UserModel;
import proyect.INTERPOLCASE.models.repository.UserRepository;
import proyect.INTERPOLCASE.models.service.UserService;

@Service
public class UserServiceIMPL implements UserService {

    private final UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserServiceIMPL(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserModel userSave(RegisterUserDTO registerDTO) {
        UserModel user = new UserModel(registerDTO.getFirstname(), registerDTO.getLastname(), registerDTO.getEmail(),
                passwordEncoder.encode(registerDTO.getPassword()), Arrays.asList(new RolModel("ROLE_USER")));

        return userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel user = userRepository.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or paswword");
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                mapRolesToAuthorities(user.getRoles()));
    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<RolModel> rol) {
        return rol.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }
}
