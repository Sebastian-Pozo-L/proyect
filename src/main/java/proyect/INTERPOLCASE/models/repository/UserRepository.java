package proyect.INTERPOLCASE.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import proyect.INTERPOLCASE.models.entity.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long> {
    UserModel findByEmail(String email);
}