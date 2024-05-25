package proyect.INTERPOLCASE.models.service;

import org.springframework.security.core.userdetails.UserDetailsService;

import proyect.INTERPOLCASE.models.dto.RegisterUserDTO;
import proyect.INTERPOLCASE.models.entity.UserModel;

public interface UserService extends UserDetailsService {
    UserModel userSave(RegisterUserDTO registerDTO);
}
